import React from 'react'
import {getAssets} from '@/services/assetService';

export default async function assetsPage(){
    const assets = await getAssets();

    return (
        <main>
            <h1>Asset List</h1>
            <AssetTable assets={assets} />
        </main> 
    )
}
  
