using System.Collections.Generic;
using System.Threading.Tasks;
using Connected.Models;
using MongoDB.Driver;
using MongoDatabaseSettings = MongoDB.Driver.MongoDatabaseSettings;

namespace Connected.Services
{
    public class ProjectsService : IProjectsService
    {
        private readonly IMongoCollection<Project> _projectsDatabase;
        private readonly IClientAuthorizationData _clientAuthorizationData;

        public ProjectsService(IMongoDatabase database, IClientAuthorizationData clientAuthorizationData)
        {
            _clientAuthorizationData = clientAuthorizationData;
            _projectsDatabase = database.GetCollection<Project>("projects");
        }
        
        public async Task<IEnumerable<Project>> GetProjects()
        {
            var projects = await _projectsDatabase.FindAsync(p => true);
            return await projects.ToListAsync();
        }

        public async Task CreateProject(Project project)
        {
            await _projectsDatabase.InsertOneAsync(project);
        }

        public async Task DeleteProject(string id)
        {
            await _projectsDatabase.DeleteOneAsync(p => p.Id == id);
        }
    }
}