using DAL.Externals.LoginExternals;
using DAL.Externals.UserExternals;
using DAL.Models;
using System.Collections.Generic;

namespace API.Contracts
{
    public interface IUserContract
    {
        IEnumerable<User> GetUsers();
        User GetUser(int Id);
        void CreateUser(User User);
        void UpdateUser(User User, UpdateUser UserUpdate);
        void DeleteUser(User User);
        bool SaveChanges();
        bool isLoggedIn(int User_Id, int JWT_Claim_User_Id);
        string Authenticate(Credentials Credentials);
    }
}
