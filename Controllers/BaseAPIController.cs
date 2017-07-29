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
        IHostingEnvironment _env;

        public BaseAPIController(IHostingEnvironment env)
        {
            _env = env;
        }
        protected MyResume GetMyResumeLang(string lang)
        {
            var result = new MyResume();
            var arch = _env.WebRootPath + @"/assets/Lang_" + lang.Trim() + ".json";
            String r = System.IO.File.ReadAllText(arch);
            result = JsonConvert.DeserializeObject<MyResume>(r);
            return result;
        }

        protected EmailConfigModel GetEmailConfig()
        {
            var result = new EmailConfigModel();
            var arch = _env.WebRootPath + @"/assets/Email_config.json";
            String r = System.IO.File.ReadAllText(arch);
            result = JsonConvert.DeserializeObject<EmailConfigModel>(r);
            return result;
        }
    }
}