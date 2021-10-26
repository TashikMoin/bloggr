using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class Statistics
    {

        [Required]
        public int Likes { get; set; }

        [Required]
        public int Views { get; set; }

        [Key]
        [ForeignKey("Blog")]
        public int Blog_Id { get; set; }

        public Blog Blog { get; set; }
    }
}
