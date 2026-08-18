using Microsoft.AspNetCore.Mvc;

namespace assettrac.api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AssetsController: ControllerBase
{
    [HttpGet]
    public IActionResult GetAssets()
    {
        return Ok("hello from API");
    }
}