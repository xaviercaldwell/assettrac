import {Asset} from '@/types/asset';


export default function AssetStatusBadge({status}: {status: Asset['status']}) {
    let badgeColor;

    if (status === 'Active') {
        badgeColor = 'bg-green-500';
    } else if (status === 'Repair') {
        badgeColor = 'bg-yellow-500';
    }
    else if (status === 'Retired') {
        badgeColor = 'bg-red-500';
    }
    return (
        <span className={`${badgeColor} inline-block w-3 h-3 rounded-full`} />
    );
}
//inline-block w-3 h-3 rounded-full for next to badgecolor to test