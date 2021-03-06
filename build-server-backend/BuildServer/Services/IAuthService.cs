﻿using System.Threading.Tasks;
using Connected.Models;

namespace Connected.Services
{
    public interface IAuthService
    {
        Task<UserAccessToken> Authenticate(string username, string password);
    }
}