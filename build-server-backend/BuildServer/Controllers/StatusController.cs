using Connected.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MongoDatabaseSettings = Connected.Models.MongoDatabaseSettings;

namespace Connected.Controllers
{
    [Route("status")]
    [Authorize]
    public class StatusController
    {
        private readonly IMongoCollection<User> _usersDatabase;

        public StatusController(MongoDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _usersDatabase = database.GetCollection<User>("services");
        }
        
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