namespace Backend.Modelo.ViewModels
{
    public class ClienteViewModel
    {
        public string Id { get; set; }
        public string Nombre { get; set; }
        public string NIT { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }
        public Boolean Estado { get; set; }
        public DateTime FechaCreacion { get; set; }
    }

    public class ClienteCrearViewModel
    {
        public string Nombre { get; set; }
        public string NIT { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }
    }
}
