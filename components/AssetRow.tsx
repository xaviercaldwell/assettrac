import {Asset} from '@/types/asset';

export default function AssetRow({asset}: {asset: Asset}) {
    return (
        <tr>
            <td>{asset.assetTag}</td>
            <td>{asset.model}</td>
            <td><AssetStatusBadge status={asset.status} /></td>
        </tr>
    )
};