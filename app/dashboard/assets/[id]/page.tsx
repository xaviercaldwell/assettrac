import React from 'react'
import {Asset} from '@/types/asset';
import {getAssetById} from '@/services/assetService';
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const asset = await getAssetById(Number(id));
return(

<div className="">
    <h1 className="text-2xl font-bold mb-4">Device Details</h1>
    <h2 className="text-xl font-semibold">{asset?.assetTag}</h2>
    <p>{asset?.id}</p>
    <p>{asset?.serialNumber}</p>
    <p>{asset?.model}</p>
    <p>{asset?.manufacturer}</p>
    <Link href={`/dashboard/assets/${id}/edit`} className="px-4 py-2 rounded">
    Edit Asset
</Link>
</div>
);
}

