﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using ResumeCVCoreAng2.Models;

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
    }
}
