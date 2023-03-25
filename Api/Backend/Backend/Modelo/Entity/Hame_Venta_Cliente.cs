using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.Metrics;

namespace Backend.Modelo.Entity
{
    public class Hame_Venta_Cliente
    {
        [Key]
        public string ClienteId { get; set; }
        public string ClienteNombre { get; set; }
        public string ClienteNIT { get; set; }
        public string ClienteDireccion { get; set; }
        public string ClienteTelefono { get; set; }
        public string ClienteEmail { get; set; }
        public Boolean ClienteEstado { get; set; }
        public DateTime ClienteFechaCreacion { get; set; }
        [ForeignKey("Usuario")]
        public string ClienteUsuarioId { get; set; }
        public virtual Usuario Usuario { get; set; }
        public virtual ICollection<Hame_Venta_Cliente_Servicio> cliente_servicios { get; set; }
    }
}
