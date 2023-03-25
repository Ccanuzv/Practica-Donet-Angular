using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Modelo.Entity
{
    public class Hame_Venta_Cliente_Servicio
    {
        [Key]
        public string ClienteServicioId { get; set; }
        public Boolean ClienteServicioEstado { get; set; }
        public DateTime ClienteServicioFechaCreacion { get; set; }
        [ForeignKey("cliente")]
        public string? ClienteServicioClienteId { get; set; }
        public virtual Hame_Venta_Cliente cliente { get; set; }
        [ForeignKey("servicio")]
        public string? ClienteServicioServicioId { get; set; }
        public virtual Hame_Venta_Servicio servicio { get; set; }
        [ForeignKey("Usuario")]
        public string ClienteServicioUsuarioId { get; set; }
        public virtual Usuario Usuario { get; set; }
    }
}
