using Microsoft.AspNetCore.Hosting;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ResumeCVCoreAng2.Controllers;
using ResumeCVCoreAng2.Models;
using System;

namespace ResumeCVCoreAng2.Test
{
    [TestClass]
    public class LangAPIControllerTests
    {
        [TestMethod]
        public void GetAllRetrieveEnglish()
        {
            // Arrange
            var env = new Mock<IWebHostEnvironment>();
            env.Setup(x => x.WebRootPath).Returns(@"C:\Proyectos\ResumeCV\ResumeCVCoreAng2\ResumeCVCoreAng2\wwwroot");
            var obj = new LangAPIController(env.Object);
            var expected = "en";
            // Act
            var jsonresult = obj.GetAll(expected);
            MyResume result = (MyResume)jsonresult.Value;
            // Assert
            Assert.AreEqual(expected, result.Language);
        }

        [TestMethod]
        public void GetAllRetrieveSpanish()
        {
            // Arrange
            var env = new Mock<IWebHostEnvironment>();
            env.Setup(x => x.WebRootPath).Returns(@"C:\Proyectos\ResumeCV\ResumeCVCoreAng2\ResumeCVCoreAng2\wwwroot");
            var obj = new LangAPIController(env.Object);
            var expected = "es";
            // Act
            var jsonresult = obj.GetAll(expected);
            MyResume result = (MyResume)jsonresult.Value;
            // Assert
            Assert.AreEqual(expected, result.Language);
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException))]
        public void GetAllRetrieveErrorWithNullParameter()
        {
            // Arrange
            var env = new Mock<IWebHostEnvironment>();
            env.Setup(x => x.WebRootPath).Returns(@"C:\Proyectos\ResumeCV\ResumeCVCoreAng2\ResumeCVCoreAng2\wwwroot");
            var obj = new LangAPIController(env.Object);
            string expected = null;
            // Act
            var jsonresult = obj.GetAll(expected);
            MyResume result = (MyResume)jsonresult.Value;
            // Assert           
            //Assert.IsNull(result);
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException))]
        public void GetAllRetrieveErrorWithEmptyParameter()
        {
            // Arrange
            var env = new Mock<IWebHostEnvironment>();
            env.Setup(x => x.WebRootPath).Returns(@"C:\Proyectos\ResumeCV\ResumeCVCoreAng2\ResumeCVCoreAng2\wwwroot");
            var obj = new LangAPIController(env.Object);
            string expected = "";
            // Act
            var jsonresult = obj.GetAll(expected);
            MyResume result = (MyResume)jsonresult.Value;
            // Assert            
            //Assert.IsNull(result);
        }
    }
}
