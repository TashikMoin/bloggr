using System.ComponentModel.DataAnnotations;

namespace DAL.Externals.BlogExternals
{
    public class UpdateBlog
    {
        [Required]
        [MinLength(20)]
        [MaxLength(100)]
        public string Title { get; set; }

        [Required]
        [MinLength(50)]
        [MaxLength(300)]
        public string Description { get; set; }

        [Required]
        [MinLength(800)]
        [MaxLength(5000)]
        public string Content { get; set; }
    }
}
