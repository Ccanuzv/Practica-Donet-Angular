using Backend.Modelo.Entity;

namespace Backend.Modelo.Repositories.IRepository
{
    public interface IServicioRepository: IRepository<Hame_Venta_Servicio>
    {
        IEnumerable<Hame_Venta_Servicio> GetInclude();
    }
}
