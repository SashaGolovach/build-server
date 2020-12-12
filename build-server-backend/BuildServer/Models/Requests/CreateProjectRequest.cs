using System.Collections.Generic;

namespace Connected.Models.Requests
{
    public class CreateProjectRequest
    {
        public string Name { get; set; }
        public string GithubRepoUrl { get; set; }
        public IEnumerable<BuildCommand> BuildCommands { get; set; }
        public string SourceLocation { get; set; }
    }
}