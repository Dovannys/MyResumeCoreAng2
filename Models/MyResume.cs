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
    }
}
