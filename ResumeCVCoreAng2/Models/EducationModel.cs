using System.Collections.Generic;

namespace ResumeCVCoreAng2.Models
{
    public class EducationListModel
    {
        public string EdYears { get; set; }
        public string EdCollege { get; set; }
        public string EdTit { get; set; }
        public string EdPlace { get; set; }
        public string EdDescription { get; set; }
    }
    public class EducationModel
    {
        public string EducationTit { get; set; }
        public List<EducationListModel> Educations { get; set; }
    }
}
