using System;

namespace DAL.Models
{
    class Blog
    {
        public int Blog_Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public DateTime Posted_At { get; set; }
    }
}
