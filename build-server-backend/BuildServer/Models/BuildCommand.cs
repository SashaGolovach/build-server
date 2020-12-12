namespace Connected.Models
{
    public class BuildCommand
    {
        public string Command { get; set; }
        public string Path { get; set; }
        public bool RunInPowershell { get; set; }
        public string Name { get; set; }
    }
}