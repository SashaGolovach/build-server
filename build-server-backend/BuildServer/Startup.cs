using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Connected.DataProviders;
using Connected.Middleware;
using Connected.Models;
using Connected.Services;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using Newtonsoft.Json.Serialization;
using MongoDatabaseSettings = Connected.Models.MongoDatabaseSettings;

namespace Connected
{
    public class Startup
    {
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                    builder =>
                    {
                        builder.AllowAnyOrigin()
                            .AllowAnyHeader();
                    });
            });
            var key = Encoding.ASCII.GetBytes(AppSettings.appSettings.JwtSecret);
            services.AddAuthentication(x =>
                {
                    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(x =>
                {
                    x.RequireHttpsMetadata = false;
                    x.SaveToken = true;
                    x.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(key),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });

            var mongoClient = new MongoClient(AppSettings.appSettings.MongoConnectionString);
            var database = mongoClient.GetDatabase(AppSettings.appSettings.MongoDatabaseName);
            services.AddSingleton<AppSettings>(sp => AppSettings.appSettings);
            services.AddSingleton<IMongoDatabase>(sp => database);
            services.AddSingleton<IOAuthTokenProvider, OAuthTokenProvider>();

            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IProjectsService, ProjectsService>();
            services.AddScoped<IClientAuthorizationData, ClientAuthorizationData>();
            services.AddScoped<IUsersService, UsersService>();
            services.AddScoped<SpotifyApiDataProvider>();
            services.AddScoped<ISpotifyDataProvider, SpotifyDataProvider>();
            services.AddScoped<IHttpClientService, HttpClientService>();
            services.AddAutoMapper(typeof(Startup));
            services.AddControllers().AddNewtonsoftJson(opt =>
            {
                opt.SerializerSettings.ContractResolver = new DefaultContractResolver();
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseCors(MyAllowSpecificOrigins);
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseMiddleware<AuthTokenMiddleware>();
            app.UseMiddleware<ExceptionHandlerMiddleware>();
            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }
    }
}