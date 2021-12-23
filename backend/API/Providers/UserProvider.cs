using API.Contexts;
using API.Contracts;
using DAL.Externals.LoginExternals;
using DAL.Externals.UserExternals;
using DAL.Models;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace API.Providers
{
    public class UserProvider : IUserContract
    {
        private readonly BloggrContext Query;
        private readonly string Private_Key;

        public UserProvider(BloggrContext _Query)
        {
            Query = _Query;
            Private_Key = "aeggajkfhuqojnfjancoancmnealvneljvneajlnalbajcjakcnjavn";
        }
        public void CreateUser(User _User)
        {
            if (_User == null)
            {
                throw new ArgumentNullException(nameof(_User));
            }
            Query.User.Add(_User);
        }

        public void DeleteUser(User User)
        {
            if (User == null)
            {
                throw new ArgumentNullException();
            }
            Query.User.Remove(User);
        }

        public User GetUser(int User_Id)
        {
            return Query.User.FirstOrDefault(x => x.User_Id == User_Id);
        }

        public IEnumerable<User> GetUsers()
        {
            return Query.User.ToList();
        }

        public bool SaveChanges()
        {
            return (Query.SaveChanges() >= 0);
        }
        public void UpdateUser(User User, UpdateUser UserUpdate)
        {
            User.Password = UserUpdate.Password;
            User.Firstname = UserUpdate.Firstname;
            User.Lastname = UserUpdate.Lastname;
        }

        public bool isLoggedIn(int User_Id, int JWT_Claim_User_Id)
        {
            if (User_Id == JWT_Claim_User_Id)
            {
                return true;
            }
            return false;
        }

        public string Authenticate(Credentials Credentials)
        {
            User User = Query.User.FirstOrDefault(user => user.Email == Credentials.Email);
            bool IsCorrect = BCrypt.Net.BCrypt.Verify(Credentials.Password, User.Password);
            if (User == null || !IsCorrect)
            {
                return null;
            }
            else
            {
                var Token_Handler = new JwtSecurityTokenHandler();
                var Token_Key = Encoding.ASCII.GetBytes(Private_Key);
                var Token_Descriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                    new Claim("Id", User.User_Id.ToString()),
                    new Claim("Email", User.Email),
                    new Claim("Name" , User.Firstname + " " + User.Lastname)
                    }
                    ),

                    Expires = DateTime.UtcNow.AddDays(3),

                    SigningCredentials =
                    new SigningCredentials(new SymmetricSecurityKey(Token_Key),
                    SecurityAlgorithms.HmacSha256Signature)
                };
                var Initialized_Token = Token_Handler.CreateToken(Token_Descriptor);
                var Final_Token = Token_Handler.WriteToken(Initialized_Token);
                return Final_Token;
            }
        }
    }
}
