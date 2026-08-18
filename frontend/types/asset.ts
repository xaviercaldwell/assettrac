export interface Asset {
    id: number;
    assetTag: string;
    manufacturer: string;
    model: string;
    serialNumber: string;
    status: "Active" | "Repair" | "Retired";
    assignedUserId?: number;
    purchaseDate: string;
    location: string;
    notes?: string;
}


