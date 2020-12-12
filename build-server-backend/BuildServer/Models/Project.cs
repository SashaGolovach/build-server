using System.Collections;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Connected.Models
{
    public class Project
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id {get; set;}
        public string Name { get; set; }
        public string GithubRepoUrl { get; set; }
        public IEnumerable<BuildCommand> BuildCommands { get; set; }
        public IEnumerable<Artifact> Artifacts { get; set; }
        public string SourceLocation { get; set; }
    }
}