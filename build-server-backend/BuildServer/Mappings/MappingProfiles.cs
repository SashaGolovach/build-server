using AutoMapper;
using Connected.Models;
using Connected.Models.Requests;

namespace Connected.Mappings
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<User, UserView>();
            CreateMap<CreateProjectRequest, Project>();
        }
    }
}