using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Connected.Models;

namespace Connected.Services
{
    public interface IProjectsService
    {
        Task<IEnumerable<Project>> GetProjects();
        Task CreateProject(Project project);
        Task DeleteProject(string id);
    }
}