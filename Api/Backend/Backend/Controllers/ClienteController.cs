using Backend.Data;
using Backend.Modelo.Entity;
using Backend.Modelo.Repositories.IRepository;
using Backend.Modelo.Repositories.Repository;
using Backend.Modelo.ViewModels;
using Backend.Shared;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly IClienteRepository _clienteRepository;
        private readonly ILogger<ClienteController> _logger;
        private readonly IConfiguration _config;
        private readonly PracticaDB _context;

        public ClienteController(IClienteRepository clienteRepository, ILogger<ClienteController> logger, IConfiguration config, PracticaDB context)
        {
            _clienteRepository = clienteRepository;
            _logger = logger;
            _config = config;
            _context = context;
        }

        [HttpPost]
        public ActionResult PostCliente(ClienteCrearViewModel model)
        {
            using (var transaction = _context.Database.BeginTransaction())
            {
                var clientebusca = _clienteRepository.GetAll().FirstOrDefault(w => w.ClienteNIT.Equals(model.NIT));
                //validad si hay otro nick igual
                if (clientebusca != null)
                {
                    return Unauthorized("Acción invalida");
                }

                try
                {
                    Hame_Venta_Cliente cliente = new Hame_Venta_Cliente();
                    cliente.ClienteId = UiddGenetor.uidd();
                    cliente.ClienteNombre = model.Nombre;
                    cliente.ClienteNIT = model.NIT;
                    cliente.ClienteDireccion = model.Direccion;
                    cliente.ClienteTelefono = model.Telefono;
                    cliente.ClienteEmail = model.Email;
                    cliente.ClienteEstado = true;
                    cliente.ClienteFechaCreacion = DateTime.Now;
                    cliente.ClienteUsuarioId = ClaimUsuario.UsuarioId(HttpContext);
                    _clienteRepository.Create(cliente);
                    transaction.Commit();

                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                    transaction.Rollback();
                    return BadRequest("error en la creacion");
                }
            }
            return Ok(1);
        }

        [HttpGet]
        public ActionResult<PagedResult<ClienteViewModel>> GetCliente
            (
                string sortName = "Nombre",
                string sortOrder = "asc",
                int pageNumber = 1,
                int pageSize = Constantes.PAGE_SIZE,
                string? nombre = null)
        {
            try
            {
                int count = 0;
                var clientes = _clienteRepository.GetAll().Select(
                    s => new ClienteViewModel
                    {
                        Id = s.ClienteId,
                        Nombre = s.ClienteNombre,
                        NIT = s.ClienteNIT,
                        Direccion = s.ClienteDireccion,
                        Telefono = s.ClienteTelefono,
                        Email = s.ClienteEmail,
                        FechaCreacion = s.ClienteFechaCreacion,
                        Estado = s.ClienteEstado

                    }); ;
                if (!string.IsNullOrEmpty(nombre))
                {
                    clientes = clientes.Where(s => s.Nombre.Contains(nombre));
                }

                count = clientes.Count();
                switch (sortName)
                {
                    case "Id":
                        clientes = sortOrder == "asc" ? clientes.OrderBy(d => d.Id) : clientes.OrderByDescending(d => d.Id);
                        break;
                    case "nombre":
                        clientes = sortOrder == "asc" ? clientes.OrderBy(d => d.Nombre) : clientes.OrderByDescending(d => d.Nombre);
                        break;
                    default:
                        clientes.OrderByDescending(d => d.Id);
                        break;
                }


                int page0 = (pageNumber - 1) * pageSize;
                clientes = clientes.Skip(page0).Take(pageSize);
                return new PagedResult<ClienteViewModel>(clientes, pageNumber, pageSize, count);

            }
            catch (Exception ex)
            {
                _logger.LogError($"Error al obtener rol {ex}");
                return BadRequest($"Error al obtener rol {ex}");
            }

        }

        [HttpPut]
        public ActionResult PutCliente(ClienteViewModel model)
        {
            var cliente = _clienteRepository.GetAll().FirstOrDefault(w => w.ClienteId.Equals(model.Id));

            if (cliente != null)
            {

                cliente.ClienteNombre = model.Nombre;
                cliente.ClienteNIT = model.NIT;
                cliente.ClienteDireccion = model.Direccion;
                cliente.ClienteTelefono = model.Telefono;
                cliente.ClienteEmail = model.Email;
                cliente.ClienteUsuarioId = ClaimUsuario.UsuarioId(HttpContext);

                bool result = _clienteRepository.Update(cliente);
                return Ok(result);
            }

            return Unauthorized("No puede actualizar el cliente");
        }
    }
}
