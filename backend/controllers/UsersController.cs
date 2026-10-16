using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using assettrac.api.Data;
using assettrac.api.models;
namespace assettrac.api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController: ControllerBase
{
    private readonly AssetTracDbContext _context;

    public UsersController(AssetTracDbContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetUsers()
    {
        var users = await _context.Users.ToListAsync();

        return Ok(users);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetUser(int id)
    {
        var user = await _context.Users.FindAsync(id);

        if (user == null)
        {
            return NotFound();
        }

        return Ok(user);
    }



}