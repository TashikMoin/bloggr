using DAL.Externals.BlogExternals;
using DAL.Models;
using System.Collections.Generic;

namespace API.Contracts
{
    public interface IBlogContract
    {
        IEnumerable<Blog> GetBlogs(int User_Id);

        IEnumerable<Blog> Search(string search);
        Blog GetBlog(int Id);
        void CreateBlog(Blog Blog);
        void UpdateBlog(Blog Blog, UpdateBlog BlogUpdate);
        void DeleteBlog(Blog Blog);
        bool SaveChanges();
    }
}
