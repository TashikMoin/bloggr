using API.Contexts;
using API.Contracts;
using DAL.Externals.BlogExternals;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace API.Providers
{
    public class BlogProvider : IBlogContract
    {
        private readonly BloggrContext Query;
        public BlogProvider(BloggrContext _Query)
        {
            Query = _Query;
        }
        public void CreateBlog(Blog _Blog)
        {
            if (_Blog == null)
            {
                throw new ArgumentNullException(nameof(_Blog));
            }
            Query.Blog.Add(_Blog);
        }

        public void DeleteBlog(Blog _Blog)
        {
            if (_Blog == null)
            {
                throw new ArgumentNullException();
            }
            Query.Blog.Remove(_Blog);
        }

        public Blog GetBlog(int Blog_Id)
        {
            return Query.Blog.FirstOrDefault(x => x.Blog_Id == Blog_Id);
        }

        public IEnumerable<Blog> GetBlogs()
        {
            return Query.Blog.ToList();
        }

        public bool SaveChanges()
        {
            return (Query.SaveChanges() >= 0);
        }

        public void UpdateBlog(Blog Blog, UpdateBlog UpdatedBlog) 
        {
            Blog.Title = UpdatedBlog.Title;
            Blog.Description = UpdatedBlog.Description;
            Blog.Content = UpdatedBlog.Content;
        }
    }
}
