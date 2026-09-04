//keep it simple just go users and assets and use EFcore
using Microsoft.EntityFrameworkCore;
using assettrac.api.models;

namespace assettrac.api.Data;

public class AssetTracDbContext: DbContext
{
    public AssetTracDbContext(DbContextOptions<AssetTracDbContext> options): base(options)
    {
        
    }

    public DbSet<User> Users {get;set;} = null!;
    public DbSet<Asset> Assets {get;set;} = null!;
}