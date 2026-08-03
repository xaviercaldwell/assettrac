import {Asset} from '@/types/asset';
import AssetStatusBadge from './AssetStatusBadge';

export default function AssetRow({asset}: {asset: Asset}) {
    return (
        <tr className="hover:bg-indigo-100">
            <td className="py-2 ">{asset.assetTag}</td>
            <td className="py-2 ">{asset.model}</td>
            <td className="py-2 "><AssetStatusBadge status={asset.status} /></td>
            <td className="py-2 "><p>&gt;</p></td>
        </tr>
    )
};