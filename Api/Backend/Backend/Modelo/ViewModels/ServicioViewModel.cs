namespace Backend.Modelo.ViewModels
{
    public class ServicioViewModel
    {
        public string Id { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public decimal MontoCosto { get; set; }
        public decimal MontoVenta { get; set; }
        public Boolean Estado { get; set; }
        public DateTime FechaCreacion { get; set; }
    }

    public class ServicioCrearViewModel
    {
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public decimal MontoCosto { get; set; }
        public decimal MontoVenta { get; set; }
    }

    public class ServicioListadoViewModel
    {
        public string Id { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public decimal MontoCosto { get; set; }
        public decimal MontoVenta { get; set; }
        public bool Estado { get; set; }

    }
}
