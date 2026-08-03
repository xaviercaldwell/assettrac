import {Asset} from '@/types/asset';

const fakeAssets: Asset[] = [
    {
        id: 1,
        assetTag: 'L26-001',
        manufacturer: 'Dell',
        model: 'Latitude 7350',
        serialNumber: 'SN123456',
        status: 'Repair',
        purchaseDate: '2026-01-15',
        location: 'Office 1',
        notes: 'Display hinge needs replacing before reassignment. Send to Dell for repair',
    },
    {
        id: 2,
        assetTag: 'D26-001',
        manufacturer: 'Dell',
        model: 'DECT1250-7104BLK-PUS',
        serialNumber: 'SN123457',
        status: 'Active',
        purchaseDate: '2026-01-16',
        location: 'Office 2',
        notes: 'Newly acquired asset.'
    },
    {
        id: 3,
        assetTag: 'L26-002',
        manufacturer: 'Dell',
        model: 'Latitude 7350',
        serialNumber: 'SN123458',
        status: 'Active',
        purchaseDate: '2026-01-17',
        location: 'Office 2',
        notes: 'Newly acquired asset.'
    },
    {
        id: 4,
        assetTag: 'D26-002',
        manufacturer: 'Dell',
        model: 'DECT1250-7104BLK-PUS',
        serialNumber: 'SN123459',
        status: 'Active',
        purchaseDate: '2026-01-18',
        location: 'Office 1',
        notes: 'Newly acquired asset.'
    }
];

export async function getAssets(): Promise<Asset[]> {
return fakeAssets;
}

//const response await fetch('https://api.example.com/assets');
//return response.json() as Promise<Asset[]>;