namespace Backend.Modelo.ViewModels
{
    public class ClienteServicioViewModel
    {
        public string Id { get; set; }
        public string ClienteId { get; set; }
        public string ServicioId { get; set; }
    }

    public class ClienteServicioCrearViewModel
    {
        public string ClienteId { get; set; }
        public string ServicioId { get; set; }
    }
}
