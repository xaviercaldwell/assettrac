"use client";

import { Asset } from "@/types/asset";
import {updateAsset} from "@/services/assetService";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {getAssetById} from "@/services/assetService";
import { useState } from "react";
import { Select, SelectItem, SelectValue, SelectContent, SelectTrigger } from "./ui/select";
import { Textarea } from "@/components/ui/textarea";
import {User} from "@/types/user";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

interface Props{
  asset: Asset;
  users: User[];
}

export default function EditAssetForm({asset, users}: Props) {
const router = useRouter();

const userOptions = users.map((user) => ({
  value: user.id,
  label: `${user.firstName} ${user.lastName}`,
  user: user,
}));


const [status, setStatus] = useState<Asset["status"]>(asset.status);

const [assignedUser, setAssignedUser] = useState<User | null>(
  users.find((user) => user.id === asset.assignedUserId) ?? null
);

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const updatedAsset = {
  ...asset,
  assetTag: formData.get("assetTag") as string,
  manufacturer: formData.get("manufacturer") as string,
  model: formData.get("model") as string,
  serialNumber: formData.get("serialNumber") as string,
  purchaseDate: formData.get("purchaseDate") as string,
  location: formData.get("location") as string,
  notes: formData.get("notes") as string,
  assignedUserId: assignedUser?.id,
  status,
};
    await updateAsset(asset.id, updatedAsset);
    console.log("Asset updated:", updatedAsset);// fake data so its hard to see my changes
    console.log(getAssetById(asset.id)); //ensure changes were made
    router.push(`/dashboard/assets/${asset.id}`);
        }
  return(
      <form
            onSubmit={handleSubmit}
            className="space-y-6"
        >

            <div className="space-y-2">
                <Label htmlFor="assetTag">
                    Asset Tag
                </Label>

                <Input
                    id="assetTag"
                    name="assetTag"
                    defaultValue={asset.assetTag}
                />
            </div>


            <div className="space-y-2">
                <Label htmlFor="manufacturer">
                    Manufacturer
                </Label>

                <Input
                    id="manufacturer"
                    name="manufacturer"
                    defaultValue={asset.manufacturer}
                />
            </div>


            <div className="space-y-2">
                <Label htmlFor="model">
                    Model
                </Label>

                <Input
                    id="model"
                    name="model"
                    defaultValue={asset.model}
                />
            </div>


            <div className="space-y-2">
                <Label htmlFor="serialNumber">
                    Serial Number
                </Label>

                <Input
                    id="serialNumber"
                    name="serialNumber"
                    defaultValue={asset.serialNumber}
                />
            </div>

<div className="space-y-2">
  <Label htmlFor="status">Status</Label>

  <Select
    value={status}
    onValueChange={(value) => setStatus(value as Asset["status"])}
  >
    <SelectTrigger id="status">
      <SelectValue />
    </SelectTrigger>

    <SelectContent>
      <SelectItem value="Active">Active</SelectItem>
      <SelectItem value="Repair">Repair</SelectItem>
      <SelectItem value="Retired">Retired</SelectItem>
    </SelectContent>
  </Select>
</div>

<div className="space-y-2">
  <Label htmlFor="purchaseDate">
    Purchase Date
  </Label>

  <Input
    id="purchaseDate"
    name="purchaseDate"
    type="date"
    defaultValue={asset.purchaseDate}
  />
</div>

<div className="space-y-2">
  <Label htmlFor="location">
    Location
  </Label>

  <Input
    id="location"
    name="location"
    defaultValue={asset.location}
  />
</div>
<div className="space-y-2">
  <Label htmlFor="notes">
    Notes
  </Label>

  <Textarea
    id="notes"
    name="notes"
    defaultValue={asset.notes}
    rows={5}
  />
</div>

<div className="space-y-2">
  <Label htmlFor="assignedUserId">
    Assigned User
  </Label>

  <Combobox
  items={userOptions}
  value={
    assignedUser
      ? userOptions.find((option) => option.user.id === assignedUser.id)
      : null
  }
  onValueChange={(option) => {
    setAssignedUser(option?.user ?? null);
  }}
  itemToStringValue={(option) => option?.label ?? ""}
>
  <ComboboxInput
    id="assignedUser"
    placeholder="Select a user"
    showClear
  />

  <ComboboxContent>
    <ComboboxEmpty>
      No users found.
    </ComboboxEmpty>

  <ComboboxList>
  {(option) => (
    <ComboboxItem
      key={option.value}
      value={option}
    >
      {option.label}
    </ComboboxItem>
  )}
</ComboboxList>
  </ComboboxContent>
</Combobox>
</div>

           <div className="flex gap-3">

  <Button type="submit">
    Save Changes
  </Button>

  <Link href={`/dashboard/assets/${asset.id}`}>
    <Button type="button" variant="outline">
      Cancel
    </Button>
  </Link>

</div>

        </form>

  );
}