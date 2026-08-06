import { getAssetById } from "@/services/assetService";
import { notFound } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function AssetDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const asset = await getAssetById(Number(id));

  if (!asset) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Asset Details</h1>

          <p className="text-muted-foreground">{asset.assetTag}</p>
        </div>

        <div className="flex gap-3">
          <Link href={`/dashboard/assets/${asset.id}/edit`}>
            <Button className="cursor-pointer">Edit Asset</Button>
          </Link>

          <Button className="cursor-pointer" variant="destructive">
            Delete Asset
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {asset.manufacturer} {asset.model}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Asset Tag</p>

              <p className="font-medium">{asset.assetTag}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Serial Number</p>

              <p className="font-mono">{asset.serialNumber}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Manufacturer</p>

              <p className="font-medium">{asset.manufacturer}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Model</p>

              <p className="font-medium">{asset.model}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Status</p>

              <p className="font-medium">{asset.status}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Location</p>

              <p className="font-medium">{asset.location}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Purchase Date</p>

              <p className="font-medium">{asset.purchaseDate}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Assigned User</p>

              <p className="font-medium">
                {asset.assignedUserId ?? "Unassigned"}
              </p>
            </div>
          </div>

          {asset.notes && (
            <div className="mt-6">
              <p className="text-sm text-muted-foreground">Notes</p>

              <p>{asset.notes}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
