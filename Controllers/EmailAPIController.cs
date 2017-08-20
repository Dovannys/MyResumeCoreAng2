using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using ResumeCVCoreAng2.Models;
using MimeKit;
using MailKit.Net.Smtp;
using MailKit.Security;
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
        public JsonResult SendMessage(string name, string email, string message)
        {
            var retorno = "OK";

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
                //client.ServerCertificateValidationCallback = (s, c, h, e) => true;

                try
                {
                    client.Connect(tmp.Host, tmp.Port, SecureSocketOptions.SslOnConnect);
                }
                catch (SmtpCommandException ex)
                {
                    retorno = ex.Message + ". " + ex.InnerException?.Message;
                    _log.LogInformation(retorno);
                    return Json(retorno);
                }
                catch (SmtpProtocolException ex)
                {
                    retorno = $"Protocol error while trying to connect: {ex.Message}";
                    _log.LogInformation(retorno);
                    return Json(retorno);
                }

                if (client.Capabilities.HasFlag(SmtpCapabilities.Authentication))
                {
                    try
                    {
                        client.Authenticate(tmp.NameAuth, tmp.PasswAuth);
                    }
                    catch (AuthenticationException)
                    {
                        retorno = $"Invalid user name or password.";
                        _log.LogInformation(retorno);
                        return Json(retorno);
                    }
                    catch (SmtpCommandException ex)
                    {
                        retorno = $"Error trying to authenticate: {ex.Message}";
                        _log.LogInformation(retorno);
                        return Json(retorno);
                    }
                    catch (SmtpProtocolException ex)
                    {
                        retorno = $"Protocol error while trying to authenticate: {ex.Message}";
                        _log.LogInformation(retorno);
                        return Json(retorno);
                    }
                }

                try
                {
                    client.Send(mess);
                }
                catch (SmtpCommandException ex)
                {
                    retorno = $"Error sending message: {ex.Message}\tStatusCode: {ex.StatusCode}";
                    switch(ex.ErrorCode)
                    {
                        case SmtpErrorCode.RecipientNotAccepted:
                            retorno += $"\tRecipient not accepted: {ex.Mailbox}";
                            break;
                        case SmtpErrorCode.SenderNotAccepted:
                            retorno += $"\tSender not accepted: {ex.Mailbox}";
                            break;
                        case SmtpErrorCode.MessageNotAccepted:
                            retorno += "\tMessage not accepted.";
                            break;
                    }
                    _log.LogInformation(retorno);
                }
                catch (SmtpProtocolException ex)
                {
                    retorno = $"Protocol error while sending message: {ex.Message}";
                    _log.LogInformation(retorno);
                }
                client.Disconnect(true);
            }
            return Json(retorno);
        }
    }
}