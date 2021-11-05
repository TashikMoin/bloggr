using API.Contracts;
using AutoMapper;
using DAL.Externals.LoginExternals;
using DAL.Externals.UserExternals;
using DAL.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UsersController : ControllerBase
    {
        private IUserContract User_Provider;
        private System.IdentityModel.Tokens.Jwt.JwtPayload Payload { get; }
        private IMapper Mapper { get; set; }
        public UsersController(IUserContract _User_Provider, IMapper _Mapper)
        {
            User_Provider = _User_Provider;
            Mapper = _Mapper;
        }

        [HttpGet("{id}", Name = "GetUser")]
        public ActionResult<User> GetUser(int Id)
        {
            var User = User_Provider.GetUser(Id);
            if (User != null)
            {
                return User;
            }
            else
            {
                return NotFound();
            }
        }

        [HttpGet]
        public ActionResult<IEnumerable<ReadUser>> GetAllUsers()
        {
            var Users = User_Provider.GetUsers();
            return Ok(Mapper.Map<IEnumerable<ReadUser>>(Users));
        }


        [AllowAnonymous]
        [Route("~/api/register")]
        [HttpPost]
        public ActionResult<ReadUser> Register(WriteUser _New_User)
        {
            string Hashed_Password = BCrypt.Net.BCrypt.HashPassword(_New_User.Password);
            _New_User.Password = Hashed_Password;
            var New_User = Mapper.Map<User>(_New_User); // WriteUser dto --> User_Provider mapping
            User_Provider.CreateUser(New_User);
            User_Provider.SaveChanges();
            var Read_User = Mapper.Map<ReadUser>(New_User);
            return CreatedAtRoute(nameof(GetUser), new { Id = New_User.User_Id }, Read_User);
        }


        [HttpPut("{id}")]
        public ActionResult UpdateUser(int Id, UpdateUser UpdatedUser)
        {
            var JWT_Claim_User_Id = User.FindFirst("Id").Value;
            if (User_Provider.isLoggedIn(Id, Int32.Parse(JWT_Claim_User_Id)))
            {
                var User = User_Provider.GetUser(Id);
                if (User == null)
                {
                    return NotFound();
                }
                User_Provider.UpdateUser(User, UpdatedUser);
                User_Provider.SaveChanges();
                return NoContent();
            }
            else { return Unauthorized(); }

        }


        [HttpDelete("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public ActionResult DeleteEmployee(int Id)
        {
            var JWT_Claim_User_Id = User.FindFirst("Id").Value;
            if (User_Provider.isLoggedIn(Id, Int32.Parse(JWT_Claim_User_Id) ))
            {
                var Current_User = User_Provider.GetUser(Id);
                if (Current_User == null)
                {
                    return NotFound();
                }
                User_Provider.DeleteUser(Current_User);
                User_Provider.SaveChanges();
                return NoContent();
            }
            else { return Unauthorized(); }
        }


        [Route("~/api/login")]
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login(Credentials Credentials)
        {
            var Token = User_Provider.Authenticate(Credentials);
            if (Token == null)
            {
                return Unauthorized();
            }
            return Ok(Token);
        }
    }
}
