import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Minus, Plus } from "lucide-react";
import React from "react";

export default function CardExpenses() {
  return (
    <Card size="sm">
      <CardHeader>
        <CardTitle className="font-normal">Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold tracking-wide">
          <span className="text-sm font-normal">Rp. </span>3.456.000
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2">
          <Badge className="bg-red-400/20 text-red-400">
            <Minus data-icon="inline-start" />
            <span>5%</span>
          </Badge>
          <span className="text-xs text-muted-foreground font-light">
            From last 1 month
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
