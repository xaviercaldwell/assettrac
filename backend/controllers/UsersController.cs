using Microsoft.AspNetCore.Mvc;

namespace assettrac.api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController: ControllerBase
{
    [HttpGet]
    public IActionResult GetUsers()
    {
        return Ok("hello from API, USERS");
    }
}