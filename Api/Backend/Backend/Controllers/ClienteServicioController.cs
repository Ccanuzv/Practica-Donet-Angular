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
    public class ClienteServicioController : ControllerBase
    {
        private readonly IClienteServicioRepository _clienteservicioRepository;
        private readonly ILogger<ClienteServicioController> _logger;
        private readonly IConfiguration _config;
        private readonly PracticaDB _context;

        public ClienteServicioController(IClienteServicioRepository clienteservicioRepository, ILogger<ClienteServicioController> logger, IConfiguration config, PracticaDB context)
        {
            _clienteservicioRepository = clienteservicioRepository;
            _logger = logger;
            _config = config;
            _context = context;
        }

        [HttpPost]
        public ActionResult PostClienteServicio(ClienteServicioCrearViewModel model)
        {
            using (var transaction = _context.Database.BeginTransaction())
            {
                var clienteServicio = _clienteservicioRepository.GetAll().FirstOrDefault(w => w.ClienteServicioClienteId.Equals(model.ClienteId)
                                                                                              && w.ClienteServicioServicioId.Equals(model.ServicioId));
                try
                {
                    if (clienteServicio != null)
                    {
                        clienteServicio.ClienteServicioEstado = !clienteServicio.ClienteServicioEstado;
                        _clienteservicioRepository.Update(clienteServicio);
                    } else
                    {
                        Hame_Venta_Cliente_Servicio cliente = new Hame_Venta_Cliente_Servicio();
                        cliente.ClienteServicioId = UiddGenetor.uidd();
                        cliente.ClienteServicioClienteId = model.ClienteId;
                        cliente.ClienteServicioServicioId = model.ServicioId;
                        cliente.ClienteServicioEstado = true;
                        cliente.ClienteServicioFechaCreacion = DateTime.Now;
                        cliente.ClienteServicioUsuarioId = ClaimUsuario.UsuarioId(HttpContext);
                        _clienteservicioRepository.Create(cliente);
                    }
                    transaction.Commit();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                    transaction.Rollback();
                    return BadRequest("error en el proceso");
                }
            }
            return Ok(1);
        }

    }
}
