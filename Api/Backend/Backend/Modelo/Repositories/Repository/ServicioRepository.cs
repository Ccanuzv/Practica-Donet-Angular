using Backend.Data;
using Backend.Modelo.Entity;
using Backend.Modelo.Repositories.IRepository;
using Microsoft.EntityFrameworkCore;

namespace Backend.Modelo.Repositories.Repository
{
    public class ServicioRepository : Repository<Hame_Venta_Servicio>, IServicioRepository
    {
        private readonly PracticaDB _context;
        private readonly ILogger<Hame_Venta_Servicio> _logger;
        public ServicioRepository(PracticaDB context, ILogger<Hame_Venta_Servicio> logger) : base(context, logger)
        {
            _context = context;
            _logger = logger;
        }

        public IEnumerable<Hame_Venta_Servicio> GetInclude()
        {
            return _context.venta_servicio
                        .Include("servicio_clientes");

        }
    }
}
