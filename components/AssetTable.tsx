'use client';
import AssetRow from "./AssetRow";
import { Asset } from "@/types/asset";
import {useState} from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect } from "react";
interface Props {
  assets: Asset[];
  initialSearch?:string;
}

export default function AssetTable({ assets, initialSearch }: Props) {
  
  const [search, setSearch] = useState(initialSearch ?? "");
useEffect(() => {
  setSearch(initialSearch ?? "");
}, [initialSearch]);
  const filteredAssets = assets.filter((asset)=>{

    const searchTerm = search.toLowerCase();


    const matchesSearch =
        asset.assetTag.toLowerCase().includes(searchTerm) ||
        asset.manufacturer.toLowerCase().includes(searchTerm) ||
        asset.model.toLowerCase().includes(searchTerm) ||
        asset.serialNumber.toLowerCase().includes(searchTerm) ||
        asset.status.toLowerCase().includes(searchTerm);




    return matchesSearch;
});
  
  return (

    <div className="space-y-4">
      <div className="max-w-xl">
<Input
                placeholder="Search assets..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="h-12 text-base text-xl px-4 rounded-lg"
            /></div>
    <Table>

      <TableHeader>
        <TableRow>
          <TableHead>Asset Tag</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {filteredAssets.map((asset) => (
          <AssetRow
            key={asset.id}
            asset={asset}
          />
        ))}
      </TableBody>

    </Table>
    </div>
  );
}