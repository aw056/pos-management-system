import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";
import {
  BoxIcon,
  ListFilter,
  ShoppingBag,
  ShoppingCart,
  Store,
  Users,
  Warehouse,
} from "lucide-react";
import Link from "next/link";
import SiderbarProfile from "./siderbar-profile";

export default function AppSidebar() {
  const sidebarItem = {
    transaction: [
      {
        name: "Purchase",
        url: "/purchase",
        icon: ShoppingCart,
      },
      {
        name: "Sale",
        url: "/sale",
        icon: Store,
      },
    ],
    storage: [
      {
        name: "Product",
        url: "/product",
        icon: BoxIcon,
      },
      {
        name: "Product's Category",
        url: "/category",
        icon: ListFilter,
      },
    ],
    other: [
      {
        name: "Supplier",
        url: "/supplier",
        icon: Warehouse,
      },
      {
        name: "User",
        url: "/user",
        icon: Users,
      },
    ],
  };

  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <span className="text-2xl text-center font-bold">P.O.S Management</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Transaction</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItem.transaction.map((item, i) => (
                <SidebarMenuItem key={i}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Storage</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItem.storage.map((item, i) => (
                <SidebarMenuItem key={i}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Other</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItem.other.map((item, i) => (
                <SidebarMenuItem key={i}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SiderbarProfile />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
