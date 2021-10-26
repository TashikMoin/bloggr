using API.Contracts;
using DAL.Externals.BlogExternals;
using DAL.Models;
using System;
using System.Collections.Generic;

namespace API.Providers
{
    public class BlogProvider : IBlogContract
    {
        public void CreateBlog(Blog Blog)
        {
            throw new NotImplementedException();
        }

        public void DeleteBlog(Blog Blog)
        {
            throw new NotImplementedException();
        }

        public Blog GetBlog(int Id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Blog> GetBlogs()
        {
            throw new NotImplementedException();
        }

        public bool SaveChanges()
        {
            throw new NotImplementedException();
        }

        public void UpdateBlog(Blog Blog, UpdateBlog BlogUpdate)
        {
            throw new NotImplementedException();
        }
    }
}
