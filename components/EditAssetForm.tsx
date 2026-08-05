"use client";

import { Asset } from "@/types/asset";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateAsset, deleteAsset } from "@/services/assetService";

export default function EditAssetForm({ asset }: { asset: Asset }) {
  const router = useRouter();

  const [formData, setFormData] = useState(asset);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    await updateAsset(asset.id, formData);

    router.push(`/dashboard/assets/${asset.id}`);
  }

  async function handleDelete() {
    await deleteAsset(asset.id);

    router.push("/dashboard/assets");
  }

  return (
    <div className="relative">
      <button
        onClick={handleDelete}
        className="
        absolute right-0 top-0
        bg-red-600 text-white
        px-4 py-2 rounded
        "
      >
        Delete Asset
      </button>

      <h1 className="text-2xl font-bold mb-6">Edit Asset</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="assetTag"
          value={formData.assetTag}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        <input
          name="manufacturer"
          value={formData.manufacturer}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        <input
          name="model"
          value={formData.model}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        <input
          name="serialNumber"
          value={formData.serialNumber}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        <input
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Confirm Changes
          </button>

          <button
            type="button"
            onClick={() => router.push(`/dashboard/assets/${asset.id}`)}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
