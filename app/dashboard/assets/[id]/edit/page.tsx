import { getAssetById } from "@/services/assetService";
import { notFound } from "next/navigation";
import EditAssetForm from "@/components/EditAssetForm";

export default async function EditAssetPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {

    const { id } = await params;

    const asset = await getAssetById(Number(id));

    if (!asset){
        notFound();
    }
    return (
        <div>
            <h1>Edit Asset</h1>

            <EditAssetForm asset={asset} />
        </div>
    );
}