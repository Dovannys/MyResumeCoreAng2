using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ResumeCVCoreAng2.Models
{
    public class MyResume
    {
        public string Language { get; set; }
        public SidebarModel Sidebar { get; set; }
        public HeaderModel Header { get; set; }
        public AboutModel About { get; set; }
        public EducationModel Education { get; set; }
        public ExperienceModel Experience { get; set; }
        public PortfolioModel Portfolio { get; set; }
        public JournalModel Journal { get; set; }
        public ContactModel Contact { get; set; }
    }
}
