using DataAccessLayer.Models;
using Microsoft.EntityFrameworkCore;

namespace backend_api.DatabaseContext
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> Options) : base(Options)
        {

        }

        public DbSet<Employee> Employees { get; set; }
    }
}
