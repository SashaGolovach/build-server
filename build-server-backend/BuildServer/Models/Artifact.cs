using System;

namespace Connected.Models
{
    public class Artifact
    {
        public string Name { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Path { get; set; }
        public string ProjectId { get; set; }
    }
}