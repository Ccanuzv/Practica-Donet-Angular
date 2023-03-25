using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Modelo.Entity
{
    public class Hame_Venta_Servicio
    {
        [Key]
        public string ServicioId { get; set; }
        public string ServicioNombre { get; set; }
        public string ServicioDescripcion { get; set; }
        public decimal ServicioMontoCosto { get; set; }
        public decimal ServicioMontoVenta { get; set; }
        public Boolean ServicioEstado { get; set; }
        public DateTime ServicioFechaCreacion { get; set; }
        [ForeignKey("Usuario")]
        public string ServicioUsuarioId { get; set; }
        public virtual Usuario Usuario { get; set; }

        public virtual ICollection<Hame_Venta_Cliente_Servicio> servicio_clientes { get; set; }
    }
}
