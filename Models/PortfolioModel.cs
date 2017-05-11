using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ResumeCVCoreAng2.Models
{
    public class ProjectsList
    {
        public string ProjectImage { get; set; }
        public string ProjectTit { get; set; }
    }
    public class PortfolioModel
    {
        public string PortfolioTit { get; set; }
        public string PathImages { get; set; }
        public List<ProjectsList> Projects { get; set; }
    }
}
