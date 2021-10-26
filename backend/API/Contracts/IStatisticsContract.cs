using DAL.Externals.StatisticsExternals;
using DAL.Models;
using System.Collections.Generic;

namespace API.Contracts
{
    public interface IStatisticsContract
    {
        IEnumerable<Statistics> GetStatisticss();
        Statistics GetStatistics(int Id);
        void CreateStatistics(Statistics Statistics);
        void UpdateStatistics(Statistics Statistics, UpdateStatistics StatisticsUpdate);
        void DeleteStatistics(Statistics Statistics);
        bool SaveChanges();
    }
}
