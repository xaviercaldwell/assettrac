"use client";

import { useRouter } from "next/navigation";

import { Asset } from "@/types/asset";
import AssetStatusBadge from "./AssetStatusBadge";

import {
  TableCell,
  TableRow,
} from "@/components/ui/table";

export default function AssetRow({ asset }: { asset: Asset }) {
  const router = useRouter();

  return (
    <TableRow
      onClick={() => router.push(`/dashboard/assets/${asset.id}`)}
      className="cursor-pointer "
    >
      <TableCell className="rounded-l-lg px-2 py-2">
        {asset.assetTag}
      </TableCell>

      <TableCell>
        {asset.model}
      </TableCell>

      <TableCell>
        <AssetStatusBadge status={asset.status} />
      </TableCell>

      <TableCell className="rounded-r-lg">
        &gt;
      </TableCell>
    </TableRow>
  );
}