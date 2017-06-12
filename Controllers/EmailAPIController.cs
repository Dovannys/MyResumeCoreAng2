using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using ResumeCVCoreAng2.Models;
using MimeKit;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Logging;

namespace ResumeCVCoreAng2.Controllers
{
    //[Produces("application/json")]
    [Route("api/[controller]")]
    public class EmailAPIController : BaseAPIController
    {
        readonly ILogger<EmailAPIController> _log;

        #region Contructores
        public EmailAPIController(IHostingEnvironment env, ILogger<EmailAPIController> log)
            : base(env)
        {
            _log = log;
        }
        #endregion

        [Route("sendmessage")]
        public void SendMessage(string name, string email, string message)
        {
            //Obtener configuración
            EmailConfigModel tmp = GetEmailConfig();

            var mess = new MimeMessage();
            mess.From.Add(new MailboxAddress(tmp.NameFrom, tmp.NameAuth));
            mess.To.Add(new MailboxAddress(tmp.MailboxToName, tmp.MailboxToAddr));
            mess.Subject = tmp.Subject + name + " <" + email + ">";

            mess.Body = new TextPart("plain")
            {
                Text = message
            };

            using (var client = new SmtpClient())
            {
                // For suport all SSL certificates (including StartTls)
                client.ServerCertificateValidationCallback = (s, c, h, e) => true;

                try
                {
                    client.Connect(tmp.Host, tmp.Port, true);

                    // Note: since we don't have an OAuth2 token, disable
                    // the XOAUTH2 authentication mechanism.
                    client.AuthenticationMechanisms.Remove("XOAUTH2");

                    client.Authenticate(tmp.NameAuth, tmp.PasswAuth);

                    client.Send(mess);
                    client.Disconnect(true);
                }
                catch (Exception ex)
                {
                    _log.LogInformation(ex.Message);
                }
            }
        }
    }
}