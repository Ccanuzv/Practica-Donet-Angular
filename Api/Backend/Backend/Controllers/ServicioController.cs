using Backend.Data;
using Backend.Modelo.Entity;
using Backend.Modelo.Repositories.IRepository;
using Backend.Modelo.Repositories.Repository;
using Backend.Modelo.ViewModels;
using Backend.Shared;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicioController : ControllerBase
    {
        private readonly IServicioRepository _servicioRepository;
        private readonly ILogger<ServicioController> _logger;
        private readonly IConfiguration _config;
        private readonly PracticaDB _context;

        public ServicioController(IServicioRepository servioRepository, ILogger<ServicioController> logger, IConfiguration config, PracticaDB context)
        {
            _servicioRepository = servioRepository;
            _logger = logger;
            _config = config;
            _context = context;
        }

        [HttpPost]
        public ActionResult PostServicio(ServicioCrearViewModel model)
        {
            using (var transaction = _context.Database.BeginTransaction())
            {
                var serviciobusca = _servicioRepository.GetAll().FirstOrDefault(w => w.ServicioNombre.Equals(model.Nombre));
                //validad si hay otro nick igual
                if (serviciobusca != null)
                {
                    return Unauthorized("Acción invalida");
                }

                try
                {
                    Hame_Venta_Servicio servicio = new Hame_Venta_Servicio();
                    servicio.ServicioId = UiddGenetor.uidd();
                    servicio.ServicioNombre = model.Nombre;
                    servicio.ServicioDescripcion = model.Descripcion;
                    servicio.ServicioMontoCosto = model.MontoCosto;
                    servicio.ServicioMontoVenta = model.MontoVenta;
                    servicio.ServicioEstado = true;
                    servicio.ServicioFechaCreacion = DateTime.Now;
                    servicio.ServicioUsuarioId = ClaimUsuario.UsuarioId(HttpContext);
                    _servicioRepository.Create(servicio);
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
        public ActionResult<PagedResult<ServicioViewModel>> GetCliente
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
                var servicios = _servicioRepository.GetAll().Select(
                    s => new ServicioViewModel
                    {
                        Id = s.ServicioId,
                        Nombre = s.ServicioNombre,
                        Descripcion = s.ServicioDescripcion,
                        MontoCosto = s.ServicioMontoCosto,
                        MontoVenta = s.ServicioMontoVenta,
                        FechaCreacion = s.ServicioFechaCreacion,
                        Estado = s.ServicioEstado

                    }); ;
                if (!string.IsNullOrEmpty(nombre))
                {
                    servicios = servicios.Where(s => s.Nombre.Contains(nombre));
                }

                count = servicios.Count();
                switch (sortName)
                {
                    case "Id":
                        servicios = sortOrder == "asc" ? servicios.OrderBy(d => d.Id) : servicios.OrderByDescending(d => d.Id);
                        break;
                    case "nombre":
                        servicios = sortOrder == "asc" ? servicios.OrderBy(d => d.Nombre) : servicios.OrderByDescending(d => d.Nombre);
                        break;
                    default:
                        servicios.OrderByDescending(d => d.Id);
                        break;
                }


                int page0 = (pageNumber - 1) * pageSize;
                servicios = servicios.Skip(page0).Take(pageSize);
                return new PagedResult<ServicioViewModel>(servicios, pageNumber, pageSize, count);

            }
            catch (Exception ex)
            {
                _logger.LogError($"Error al obtener rol {ex}");
                return BadRequest($"Error al obtener rol {ex}");
            }
        }

        [HttpPut]
        public ActionResult PutCliente(ServicioViewModel model)
        {
            var servicio = _servicioRepository.GetAll().FirstOrDefault(w => w.ServicioId.Equals(model.Id));

            if (servicio != null)
            {

                servicio.ServicioNombre = model.Nombre;
                servicio.ServicioDescripcion = model.Descripcion;
                servicio.ServicioMontoCosto = model.MontoCosto;
                servicio.ServicioMontoVenta = model.MontoVenta;
                servicio.ServicioUsuarioId = ClaimUsuario.UsuarioId(HttpContext);

                bool result = _servicioRepository.Update(servicio);
                return Ok(result);
            }

            return BadRequest("No puede actualizar el servicio");
        }

        [HttpGet("listadoServicio")]
        public ActionResult<IEnumerable<ServicioViewModel>> Listar3(string cliente)
        {
            var result1 = _servicioRepository.GetInclude().ToList();
            var result = _servicioRepository.GetInclude()
                .Where(w => w.ServicioEstado == true).Select(s => new ServicioListadoViewModel
                {
                    Id = s.ServicioId,
                    Nombre = s.ServicioNombre,
                    Descripcion = s.ServicioDescripcion,
                    MontoCosto = s.ServicioMontoCosto,
                    MontoVenta = s.ServicioMontoVenta,
                    Estado = s.servicio_clientes.Any(a => a.ClienteServicioClienteId.Equals(cliente)
                                                          && a.ClienteServicioEstado == true)
                });
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(string id) {
            var servicio = _servicioRepository.GetAll().FirstOrDefault(w => w.ServicioId.Equals(id));
            if (servicio == null)
            {
                return BadRequest("No puede realizar esta opereación");
            }
            _context.Database.ExecuteSqlInterpolatedAsync($@"EXEC dbo.ServicioDeBaja @id ={id}");
            return Ok(1);
        }

    }
}
