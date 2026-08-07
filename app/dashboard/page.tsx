import React from "react";
import Link from "next/link";
import { getAssets } from "@/services/assetService";
import { getUsers } from "@/services/userService";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function DashboardPage() {
  const assets = await getAssets();
  const users = await getUsers();

  const totalAssets = assets.length;

  const activeAssets = assets.filter(
    (asset) => asset.status === "Active"
  ).length;

  const repairAssets = assets.filter(
    (asset) => asset.status === "Repair"
  ).length;

  const retiredAssets = assets.filter(
    (asset) => asset.status === "Retired"
  ).length;


  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-muted-foreground">
          Asset overview
        </p>
      </div>


      <div className="grid gap-4 md:grid-cols-5">


        <Link href="/dashboard/assets">
          <Card className="cursor-pointer transition hover:bg-muted">
            <CardHeader>
              <CardTitle>
                Total Assets
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-3xl font-bold">
                {totalAssets}
              </p>
            </CardContent>
          </Card>
        </Link>



        <Link href="/dashboard/assets?search=Active">
          <Card className="cursor-pointer transition hover:bg-muted">
            <CardHeader>
              <CardTitle>
                Active Assets
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-3xl font-bold">
                {activeAssets}
              </p>
            </CardContent>
          </Card>
        </Link>



        <Link href="/dashboard/assets?search=Repair">
          <Card className="cursor-pointer transition hover:bg-muted">
            <CardHeader>
              <CardTitle>
                In Repair
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-3xl font-bold">
                {repairAssets}
              </p>
            </CardContent>
          </Card>
        </Link>



        <Link href="/dashboard/assets?search=Retired">
          <Card className="cursor-pointer transition hover:bg-muted">
            <CardHeader>
              <CardTitle>
                Retired
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-3xl font-bold">
                {retiredAssets}
              </p>
            </CardContent>
          </Card>
        </Link>



        <Link href="/dashboard/users">
          <Card className="cursor-pointer transition hover:bg-muted">
            <CardHeader>
              <CardTitle>
                Total Users
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-3xl font-bold">
                {users.length}
              </p>
            </CardContent>
          </Card>
        </Link>


      </div>

    </div>
  );
}