import AssetRow from './AssetRow';
import { Asset } from "@/types/asset";

interface Props{
    assets: Asset[];
}

export default function AssetTable({assets}: Props){
    return (
        <table>
            <thead>
                <tr>
                    <th>Asset Tag</th>
                    <th>Model</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {assets.map(asset => (
                <AssetRow
                    key={asset.id}
                    asset={asset}
                />
            ))}
            </tbody>
        </table>
    )
}