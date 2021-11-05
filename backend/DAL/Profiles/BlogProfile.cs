using AutoMapper;
using DAL.Externals.BlogExternals;
using DAL.Models;

namespace DAL.Profiles
{
    public class BlogProfile : Profile
    {
        public BlogProfile()
        {
            CreateMap<Blog, ReadBlog>().PreserveReferences();
            CreateMap<ReadBlog, Blog>().PreserveReferences();
            CreateMap<Blog, WriteBlog>().PreserveReferences();
            CreateMap<WriteBlog, Blog>().PreserveReferences();
            CreateMap<Blog, UpdateBlog>().PreserveReferences();
            CreateMap<UpdateBlog, Blog>().PreserveReferences();
        }
    }
}
