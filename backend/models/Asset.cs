namespace assettrac.api.models;

public enum AssetStatus
{
    Active,
    Repair,
    Retired
}

public class Asset
{
    public int Id { get; set; }
    public string AssetTag { get; set; } = "";
    public string Manufacturer { get; set; } = "";
    public string Model { get; set; } = "";
    public string SerialNumber { get; set; } = "";
    public AssetStatus Status { get; set; }
    public DateTime PurchaseDate { get; set; }
    public string Location { get; set; } = "";
    public string? Notes { get; set; }
    public int? AssignedUserId { get; set; }
    public User? AssignedUser { get; set; }
}