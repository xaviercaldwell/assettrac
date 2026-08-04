import React from 'react'
import {Asset} from '@/types/asset';
import {getAssetById} from '@/services/assetService';


export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const asset = await getAssetById(Number(id));
return(

<div className="text-black">
    <h1 className="text-2xl font-bold mb-4">Device Details</h1>
    <h2 className="text-xl font-semibold">{asset?.assetTag}</h2>
    <p>{asset?.id}</p>
    <p>{asset?.serialNumber}</p>
    <p>{asset?.model}</p>
    <p>{asset?.manufacturer}</p>
</div>
);
}

