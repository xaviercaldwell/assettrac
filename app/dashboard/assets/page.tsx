import React from 'react'
import {getAssets} from '@/services/assetService';
import AssetTable from '@/components/AssetTable';
export default async function assetsPage(){
    const assets = await getAssets();

    return (
        <main className="text-black">
            <h1 className="text-2xl font-bold mb-4">Asset List</h1>
            <AssetTable assets={assets} />
        </main> 
    )
}
  
