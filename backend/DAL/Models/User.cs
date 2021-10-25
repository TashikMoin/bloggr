using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DAL.Models
{
    public class User
    {
        [Key]
        [Required]
        public int User_Id { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        [MinLength(8)]
        [MaxLength(25)]
        public string Password { get; set; }

        [Required]
        [MaxLength(30)]
        public string Firstname { get; set; }

        [Required]
        [MaxLength(30)]
        public string Lastname { get; set; }

        // 1 - M relation with naviagating properties
        public List<Blog> Blogs { get; set; }
    }
}
