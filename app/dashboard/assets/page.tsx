import { getAssets } from "@/services/assetService";
import AssetTable from "@/components/AssetTable";

export default async function AssetsPage() {
  const assets = await getAssets();

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">
        Asset List
      </h1>

      <AssetTable assets={assets} />
    </div>
  );
}