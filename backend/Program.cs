using Microsoft.EntityFrameworkCore;
using assettrac.api.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi

//enable services for openapi and controller support a way to handle dbcontext
builder.Services.AddOpenApi();

builder.Services.AddControllers();

builder.Services.AddDbContext<AssetTracDbContext>(options =>
 options.UseSqlServer(
    builder.Configuration.GetConnectionString("AssetTracDb")));




var app = builder.Build();
//testing block to see if i can connect to azure
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AssetTracDbContext>();

    if (await db.Database.CanConnectAsync())
    {
        Console.WriteLine("Successfully connected to AssetTrac database!");
    }
    else
    {
        Console.WriteLine("Could not connect to AssetTrac database.");
    }
}

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    //actually map the added service for open api to all endpoints
    app.MapOpenApi();
}
//redirets http to https
app.UseHttpsRedirection();
 //actually map the added service for controllers to all endpoints 
app.MapControllers();

//start app and listen for http reqs
app.Run();


