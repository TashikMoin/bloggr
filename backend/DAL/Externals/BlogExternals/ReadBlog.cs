using System;

namespace DAL.Externals.BlogExternals
{
    public class ReadBlog
    {
        public int Blog_Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Content { get; set; }

        public DateTime Posted_At;
    }
}
