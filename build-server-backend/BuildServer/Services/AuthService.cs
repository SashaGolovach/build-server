using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Connected.Models;
using Microsoft.IdentityModel.Tokens;

namespace Connected.Services
{
    public class AuthService : IAuthService
    {
        private IUsersService _usersService;
        private readonly IOAuthTokenProvider _oAuthTokenProvider;

        public AuthService(IUsersService usersService, IOAuthTokenProvider oAuthTokenProvider)
        {
            _usersService = usersService;
            _oAuthTokenProvider = oAuthTokenProvider;
        }

        public async Task<UserAccessToken> Authenticate(string username, string password)
        {
            var user = _usersService.GetByUsername(username);
            if (user.PasswordHash != password)
                throw new HttpException((int) HttpStatusCode.BadRequest, "Invalid credentials");
            return _oAuthTokenProvider.RegisterToken(user.Id);
        }
    }
}