using System;
using Microsoft.AspNetCore.Mvc;
using ResumeCVCoreAng2.Models;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;

namespace ResumeCVCoreAng2.Controllers
{
    [Produces("application/json")]
    [Route("api/BaseAPI")]
    public class BaseAPIController : Controller
    {
        public IWebHostEnvironment _env;

        public BaseAPIController(IWebHostEnvironment env)
        {
            _env = env;
        }
        protected MyResume GetMyResumeLang(string lang)
        {
            if(string.IsNullOrEmpty(lang))
            {
                throw new ArgumentException("Language Id. can't be null or empty.");
            }
            var arch = _env.WebRootPath + @"/assets/Lang_" + lang.Trim() + ".json";
            String r = System.IO.File.ReadAllText(arch);
            return JsonConvert.DeserializeObject<MyResume>(r);            
        }

        protected EmailConfigModel GetEmailConfig()
        {
            var arch = _env.WebRootPath + @"/assets/Email_config.json";
            String r = System.IO.File.ReadAllText(arch);
            return JsonConvert.DeserializeObject<EmailConfigModel>(r);            
        }
    }
}