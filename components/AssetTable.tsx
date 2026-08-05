import AssetRow from "./AssetRow";
import { Asset } from "@/types/asset";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Props {
  assets: Asset[];
}

export default function AssetTable({ assets }: Props) {
  return (
    <Table>

      <TableHeader>
        <tr>
          <TableHead>Asset Tag</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>Status</TableHead>
        </tr>
      </TableHeader>

      <TableBody>
        {assets.map((asset) => (
          <AssetRow
            key={asset.id}
            asset={asset}
          />
        ))}
      </TableBody>

    </Table>
  );
}