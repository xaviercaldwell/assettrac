using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using assettrac.api.Data;
using assettrac.api.models;

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

    [HttpGet("{id}")]
    public async Task<IActionResult> GetAsset(int id)
    {
        var asset = await _context.Assets.FindAsync(id);

        if (asset == null)
        {
            return NotFound();
        }

        return Ok(asset);
    }

    [HttpPost]
    public async Task<IActionResult> CreateAsset(Asset asset)
    {
        _context.Assets.Add(asset);

        await _context.SaveChangesAsync();
        return Ok(asset);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateAsset(int id, Asset updatedAsset)
    {
        var asset = await _context.Assets.FindAsync(id);

        if (asset == null)
        {
            return NotFound();
        }

        asset.AssetTag = updatedAsset.AssetTag;
        asset.Manufacturer = updatedAsset.Manufacturer;
        asset.Model = updatedAsset.Model;
        asset.SerialNumber = updatedAsset.SerialNumber;
        asset.Status = updatedAsset.Status;
        asset.PurchaseDate = updatedAsset.PurchaseDate;
        asset.Location = updatedAsset.Location;
        asset.Notes = updatedAsset.Notes;
        asset.AssignedUserId = updatedAsset.AssignedUserId;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAsset(int id)
    {
        var asset = await _context.Assets.FindAsync(id);

        if (asset == null)
        {
            return NotFound();
        }

        _context.Assets.Remove(asset);
        await _context.SaveChangesAsync();

        return NoContent();
    }

}