using System.ComponentModel.DataAnnotations;

namespace DAL.Models
{
    public class Statistics
    {
        [Required]
        public int Likes { get; set; }

        [Required]
        public int Views { get; set; }

        [Key]
        [Required]
        public int Blog_Id { get; set; }

        public Blog Blog { get; set; }
    }
}
