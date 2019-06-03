using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using ResumeCVCoreAng2.Models;
using System.Net.Http;
using System.Net;
using System.IO;
using System.Net.Http.Headers;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ResumeCVCoreAng2.Controllers
{
    [Route("api/[controller]")]
    public class LangAPIController : BaseAPIController
    {
        #region Contructores
        public LangAPIController(IHostingEnvironment env)
            : base(env)
        {
        }
        #endregion

        [Route("all/{Id}")]
        public JsonResult GetAll(string Id)
        {
            return Json(GetMyResumeLang(Id));
        }

        [Route("sidebar/{Id}")]
        public JsonResult GetSidebar(string Id)
        {
            MyResume tmp = GetMyResumeLang(Id);
            return Json(tmp.Sidebar);
        }

        [Route("header/{Id}")]
        public JsonResult GetTitle(string Id)
        {
            MyResume tmp = GetMyResumeLang(Id);
            return Json(tmp.Header);
        }

        [Route("about/{Id}")]
        public JsonResult GetAbout(string Id)
        {
            MyResume tmp = GetMyResumeLang(Id);
            return Json(tmp.About);
        }

        [Route("education/{Id}")]
        public JsonResult GetEducation(string Id)
        {
            MyResume tmp = GetMyResumeLang(Id);
            return Json(tmp.Education);
        }

        [Route("experience/{Id}")]
        public JsonResult GetExperience(string Id)
        {
            MyResume tmp = GetMyResumeLang(Id);
            return Json(tmp.Experience);
        }

        [Route("portfolio/{Id}")]
        public JsonResult GetPortfolio(string Id)
        {
            MyResume tmp = GetMyResumeLang(Id);
            return Json(tmp.Portfolio);
        }

        [Route("journal/{Id}")]
        public JsonResult GetJournal(string Id)
        {
            MyResume tmp = GetMyResumeLang(Id);
            return Json(tmp.Journal);
        }

        [Route("contact/{Id}")]
        public JsonResult GetContact(string Id)
        {
            MyResume tmp = GetMyResumeLang(Id);
            return Json(tmp.Contact);
        }

        [Route("download/{Id}")]
        public JsonResult GetDownload(string Id)
        {
            MyResume tmp = GetMyResumeLang(Id);
            return Json(tmp.Download);
        }

        [Route("getpdf/{Id}")]
        public ActionResult GetPdf(string Id)
        {
            MyResume tmp = GetMyResumeLang(Id);

            string fileName = System.IO.Path.Combine(_env.WebRootPath + tmp.Download.PathCV);
            FileStream fileStream = System.IO.File.OpenRead(fileName);

            //HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
            //response.Content = new StreamContent(fileStream);
            //response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/pdf");

            return File(fileStream, "application/pdf");
        }
    }
}
