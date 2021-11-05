using System.ComponentModel.DataAnnotations;

namespace DAL.Externals.LoginExternals
{
    public class Credentials
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
