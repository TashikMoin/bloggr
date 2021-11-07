using System.ComponentModel.DataAnnotations;

namespace DAL.Externals.UserExternals
{
    public class UpdateUser
    {
        [Required]
        public string Password { get; set; }

        [Required]
        [MaxLength(30)]
        public string Firstname { get; set; }

        [Required]
        [MaxLength(30)]
        public string Lastname { get; set; }
    }
}
