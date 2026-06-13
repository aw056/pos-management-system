import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUp, Plus } from "lucide-react";
import React from "react";

export default function CardRevenue() {
  return (
    <Card size="sm">
      <CardHeader>
        <CardTitle className="font-normal">Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold tracking-wide">
          <span className="text-sm font-normal">Rp. </span>123.456.000
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2">
          <Badge className="bg-green-400/20 text-green-400">
            <Plus data-icon="inline-start" />
            <span>20%</span>
          </Badge>
          <span className="text-xs text-muted-foreground font-light">
            From last 1 month
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
