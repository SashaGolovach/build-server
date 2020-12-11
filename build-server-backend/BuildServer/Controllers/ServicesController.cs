using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Connected.Controllers
{
    [Route("services")]
    [Authorize]
    public class ServicesController
    {
        [HttpGet("")]
        public ActionResult GetCurrentUser()
        {
            var status = new
            {
                Status = "Ok",
                DatabaseStatus = "Ok",
                MySqlConnected = "False"
            };
            return new JsonResult(status);
        }
    }
}