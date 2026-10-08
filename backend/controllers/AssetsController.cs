using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using assettrac.api.Data;

namespace assettrac.api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AssetsController : ControllerBase
{
    private readonly AssetTracDbContext _context;

    public AssetsController(AssetTracDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAssets()
    {
        var assets = await _context.Assets.ToListAsync();

        return Ok(assets);
    }
}