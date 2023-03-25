using Backend.Data;
using Backend.Modelo.Entity;
using Backend.Modelo.Repositories.IRepository;

namespace Backend.Modelo.Repositories.Repository
{
    public class ClienteServicioRespository: Repository<Hame_Venta_Cliente_Servicio>, IClienteServicioRepository
    {
        private readonly PracticaDB _context;
        private readonly ILogger<Hame_Venta_Cliente_Servicio> _logger;

        public ClienteServicioRespository(PracticaDB context, ILogger<Hame_Venta_Cliente_Servicio> logger) : base(context, logger)
        {
            _context = context;
            _logger = logger;
        }
    }
}
