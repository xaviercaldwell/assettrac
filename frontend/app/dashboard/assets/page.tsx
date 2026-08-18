export const dynamic = "force-dynamic";
import { getAssets } from "@/services/assetService";
import AssetTable from "@/components/AssetTable";

export default async function assetsPage({
    searchParams,
}: {
    searchParams: Promise<{search?:string}>
}) {

    const assets = await getAssets();

    const {search} = await searchParams;


    return (
        <AssetTable
            assets={assets}
            initialSearch={search}
        />
    );
}