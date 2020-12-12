﻿namespace Connected.Models
{
    public class AppSettings
    {
        public static AppSettings appSettings {get; set;}
        public string JwtSecret {get; set;}
        public string GoogleClientId  {get; set;}
        public string GoogleClientSecret  {get; set;}
        public string SpotifyClientId  {get; set;}
        public string SpotifyClientSecret  {get; set;}
        public string JwtEmailEncryption {get; set;}
        public string MongoConnectionString {get; set;}
        public string MongoDatabaseName {get; set;}
    }
}