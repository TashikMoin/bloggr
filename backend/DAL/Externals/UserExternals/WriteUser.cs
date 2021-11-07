using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace DAL.Externals.UserExternals
{
    [Index(nameof(Email), IsUnique = true)]
    public class WriteUser
    {

        [Required]
        public string Email { get; set; }

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
