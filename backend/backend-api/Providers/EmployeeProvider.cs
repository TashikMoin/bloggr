using backend_api.Contracts;
using DataAccessLayer.Models;
using System.Collections.Generic;

namespace backend_api.Providers
{
    public class EmployeeProvider : IEmployeeProvider
    {
        // In-memory implementation
        public Employee GetEmployee(int Id)
        {
            return new Employee { Id = Id, Name = "John" };
        }

        public IEnumerable<Employee> GetEmployees()
        {
            var Employees = new List<Employee>
            {
                new Employee { Id = 1, Name = "David" },
                new Employee { Id = 2, Name = "Larry" },
                new Employee { Id = 3, Name = "Clarke" }
            };
            return Employees;
        }
    }
}
