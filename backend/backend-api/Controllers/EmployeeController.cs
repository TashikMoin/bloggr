using backend_api.Contracts;
using DataAccessLayer.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace backend_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {

        private readonly IEmployeeProvider _Employee;

        public EmployeeController(IEmployeeProvider Employee)
        {
            _Employee = Employee;
        }

        [HttpGet("{id}")]
        public ActionResult<Employee> GetEmployee(int Id)
        {
            return Ok(_Employee.GetEmployee(Id));
        }

        [HttpGet]
        public ActionResult<IEnumerable<Employee>> GetEmployees()
        {
            return Ok(_Employee.GetEmployees());
        }

    }
}
