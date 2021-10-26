using DAL.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UserController : ControllerBase
    {
        private User UserProvider { get; set; }
        private IMapper Mapper { get; set; }
    }
}
