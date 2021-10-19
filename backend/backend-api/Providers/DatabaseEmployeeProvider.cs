using backend_api.Contracts;
using backend_api.DatabaseContext;
using DataAccessLayer.Models;
using System.Collections.Generic;
using System.Linq;

namespace backend_api.Providers
{
    public class DatabaseEmployeeProvider : IEmployeeProvider
    {
        private readonly EmployeeContext _Employees;

        public DatabaseEmployeeProvider(EmployeeContext Employees)
        {
            _Employees = Employees;
        }
        public Employee GetEmployee(int Id)
        {
            return _Employees.Employees.FirstOrDefault(x => x.Id == Id);
        }

        public IEnumerable<Employee> GetEmployees()
        {
            return _Employees.Employees.ToList();
        }
    }
}
