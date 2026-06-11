import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";
import { Avatar, AvatarFallback } from "./avatar";
import Link from "next/link";
import { LogOut, UserPen } from "lucide-react";

export default function SiderbarProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-full py-8 justify-baseline gap-4">
          <Avatar size="lg">
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div className="text-start">
            <p>Admin</p>
            <small className="text-muted-foreground">Administrator</small>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="/user" className="flex justify-center gap-2">
            <UserPen />
            Edit Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Link href="/user" className="flex justify-center gap-2">
            <LogOut />
            Log Out
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
