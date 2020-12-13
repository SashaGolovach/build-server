using System;
using System.Threading.Tasks;
using AutoMapper;
using Connected.Models;
using Connected.Models.Requests;
using Connected.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Connected.Controllers
{
    [Route("projects")]
    [Authorize]
    public class ProjectsController
    {
        private readonly IProjectsService _projectsService;
        private readonly IMapper _mapper;

        public ProjectsController(IProjectsService projectsService, IMapper mapper)
        {
            _projectsService = projectsService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult> GetProjects()
        {
            var projects = await _projectsService.GetProjects();
            return new JsonResult(projects);
        }

        [HttpPost]
        public async Task<ActionResult> CreateProject([FromBody] Project project)
        {
            await _projectsService.CreateProject(project);
            return new JsonResult(project);
        }
        
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProject(string id)
        {
            await _projectsService.DeleteProject(id);
            return new OkResult();
        }
    }
}