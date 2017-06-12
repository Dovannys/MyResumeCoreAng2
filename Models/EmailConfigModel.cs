using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ResumeCVCoreAng2.Models
{
    public class EmailConfigModel
    {
        public string Host { get; set; }
        public int Port { get; set; }
        public string MailboxToName { get; set; }
        public string MailboxToAddr { get; set; }
        public string Subject { get; set; }
        public string NameFrom { get; set; }
        public string NameAuth { get; set; }
        public string PasswAuth { get; set; }
    }
}
