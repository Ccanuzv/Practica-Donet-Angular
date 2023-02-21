using System.ComponentModel.DataAnnotations;

namespace Backend.Modelo.ViewModels
{
    public class UsuarioCrearViewModel
    {
        [Required]
        public string Nombre { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
        [Required]
        public DateTime Fecha { get; set; }

    }

    public class UsuarioViewModel
    {
        public string Nombre { get; set; }
        public string Email { get; set; }

    }

    public class UsuarioLoginViewModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }

    }

    public class UsuarioRecuperaViewModel
    {
        public string token { get; set; }
        public string Pass { get; set; }
        public DateTime fecha { get; set; }

    }

}
