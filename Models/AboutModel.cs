using System.Collections.Generic;

namespace ResumeCVCoreAng2.Models
{
    public class CertListModel
    {
        public string CertTit { get; set; }
        public string CertDesc { get; set; }
        public string CertLink { get; set; }
    }

    public class CertificationModel
    {
        public string CertificTit { get; set; }
        public List<CertListModel> Certific { get; set; }
    }

    public class SkillListModel
    {
        public string SkillTit { get; set; }
        public float SkillVal { get; set; }
    }

    public class SkillModel
    {
        public string SkillsTit { get; set; }
        public List<SkillListModel> SkillsLeft { get; set; }
        public List<SkillListModel> SkillsRight { get; set; }
    }

    public class AboutModel
    {
        public string AboutTit { get; set; }
        public string FullNameTit { get; set; }
        public string BirthdateTit { get; set; }
        public string Birthdate { get; set; }
        public string AddressTit { get; set; }
        public string Address { get; set; }
        public CertificationModel Cert { get; set; }
        public SkillModel Skills { get; set; }
    }
}
