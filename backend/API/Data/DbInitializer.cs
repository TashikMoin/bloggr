using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Contexts;

namespace API.Data
{
    public class DbInitializer
    {
        public static void Initialize(BloggrContext context)
        {
            context.Database.EnsureCreated();

            if (context.User.Any())
            {
                return;
            }

            context.SaveChanges();
        }
    }
}
