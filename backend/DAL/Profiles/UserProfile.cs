using AutoMapper;
using DAL.Externals.UserExternals;
using DAL.Models;

namespace DAL.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, ReadUser>().PreserveReferences();
            CreateMap<ReadUser, User>().PreserveReferences();
            CreateMap<User, WriteUser>().PreserveReferences();
            CreateMap<WriteUser, User>().PreserveReferences();
            CreateMap<User, UpdateUser>().PreserveReferences();
            CreateMap<UpdateUser, User>().PreserveReferences();
        }
    }
}
