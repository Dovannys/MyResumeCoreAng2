using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ResumeCVCoreAng2.Models
{
    public class PostList
    {
        public string PostTit { get; set; }
        public string PostDetail { get; set; }
        public string PostImg { get; set; }
        public string PostVideo { get; set; }
    }
    public class JournalModel
    {
        public string JournalTit { get; set; }
        public List<PostList> Posts { get; set; }
    }
}
