import { getAssetById } from "@/services/assetService";

export default async function EditAssetPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {

    const { id } = await params;

    const asset = await getAssetById(Number(id));


    return (
        <div>
            <h1>Edit Asset</h1>

            <p>{asset?.assetTag}</p>
        </div>
    );
}