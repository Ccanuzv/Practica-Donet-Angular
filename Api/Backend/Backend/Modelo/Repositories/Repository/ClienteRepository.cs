using Backend.Data;
using Backend.Modelo.Entity;
using Backend.Modelo.Repositories.IRepository;

namespace Backend.Modelo.Repositories.Repository
{
    public class ClienteRepository: Repository<Hame_Venta_Cliente>, IClienteRepository
    {
        private readonly PracticaDB _context;
        private readonly ILogger<Hame_Venta_Cliente> _logger;

        public ClienteRepository(PracticaDB context, ILogger<Hame_Venta_Cliente> logger) : base(context, logger)
        {
            _context = context;
            _logger = logger;
        }
    }
}
