using API.Contracts;
using DAL.Externals.UserExternals;
using DAL.Models;
using System;
using System.Collections.Generic;

namespace API.Providers
{
    public class UserProvider : IUserContract
    {
        public void CreateUser(User User)
        {
            throw new NotImplementedException();
        }

        public void DeleteUser(User User)
        {
            throw new NotImplementedException();
        }

        public User GetUser(int Id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> GetUsers()
        {
            throw new NotImplementedException();
        }

        public bool SaveChanges()
        {
            throw new NotImplementedException();
        }

        public void UpdateUser(User User, UpdateUser UserUpdate)
        {
            throw new NotImplementedException();
        }
    }
}
