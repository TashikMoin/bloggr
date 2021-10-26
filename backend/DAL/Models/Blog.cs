using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class Blog
    {
        [Key]
        public int Blog_Id { get; set; }

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

        [Required]
        public DateTime Posted_At { get; set; }

        // Navigation Property (Foreign Key)
        [ForeignKey("User")]
        public int User_Id { get; set; }
        public User User { get; set; }

    }
}
