using AutoMapper;
using DAL.Externals.StatisticsExternals;
using DAL.Models;

namespace DAL.Profiles
{
    public class StatisticsProfile : Profile
    {
        public StatisticsProfile()
        {
            CreateMap<Statistics, ReadStatistics>().PreserveReferences();
            CreateMap<ReadStatistics, Statistics>().PreserveReferences();
            CreateMap<Statistics, WriteStatistics>().PreserveReferences();
            CreateMap<WriteStatistics, Statistics>().PreserveReferences();
            CreateMap<Statistics, UpdateStatistics>().PreserveReferences();
            CreateMap<UpdateStatistics, Statistics>().PreserveReferences();
        }
    }
}
