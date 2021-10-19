using DataAccessLayer.Models;
using System.Collections.Generic;

namespace backend_api.Contracts
{
    public interface IEmployeeProvider
    {
        IEnumerable<Employee> GetEmployees();
        Employee GetEmployee(int Id);
    }
}
