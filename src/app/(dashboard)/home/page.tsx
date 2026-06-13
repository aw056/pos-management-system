import CardExpenses from "@/components/features/home/CardExpenses";
import CardProfit from "@/components/features/home/CardProfit";
import CardRevenue from "@/components/features/home/CardRevenue";
import React from "react";

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <CardRevenue />
      <CardExpenses />
      <CardProfit />
    </div>
  );
}
