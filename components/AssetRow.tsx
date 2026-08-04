'use client';

import {Asset} from '@/types/asset';
import AssetStatusBadge from './AssetStatusBadge';
import { useRouter } from 'next/navigation';

export default function AssetRow({asset}: {asset: Asset}) {
    const router = useRouter();
    return (
        <tr
        onClick={() => {
            router.push(`/dashboard/assets/${asset.id}`);
        }}
        className="hover:bg-indigo-100">
            <td className="rounded-l-lg px-2 py-2 ">{asset.assetTag}</td>
            <td className="py-2 ">{asset.model}</td>
            <td className="py-2 "><AssetStatusBadge status={asset.status} /></td>
            <td className="rounded-r-lg  py-2 "><p>&gt;</p></td>
        </tr>
    )
};