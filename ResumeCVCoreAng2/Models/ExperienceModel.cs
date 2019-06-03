using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ResumeCVCoreAng2.Models
{
    public class ExperienceListModel
    {
        public string ExYears { get; set; }
        public string ExCompany { get; set; }
        public string ExTit { get; set; }
        public string ExPlace { get; set; }
        public string ExDescription { get; set; }
    }

    public class ExperienceModel
    {
        public string ExperienceTit { get; set; }
        public List<ExperienceListModel> Experiences { get; set; }
    }
}
