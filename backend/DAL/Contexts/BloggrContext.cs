using DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL.Contexts
{
    public class BloggrContext : DbContext
    {
        public BloggrContext(DbContextOptions<BloggrContext> Options) : base(Options)
        {

        }

        public DbSet<User> User { get; set; }
        public DbSet<Blog> Blog { get; set; }
        public DbSet<Statistics> Statistics { get; set; }
    }
}
