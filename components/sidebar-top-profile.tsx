"use client"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ChevronsUpDownIcon } from "lucide-react"
import Image from "next/image"

export function SideBarTopProfile() {
  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            className="gap-4 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-400 text-sidebar-primary-foreground dark:bg-yellow-300">
              <Image
                src="/github/avatar.png"
                alt="Profile Photo"
                width={100}
                height={100}
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-1 leading-none">
              <span className="font-medium">Rehman Kalawant</span>
            </div>
            <ChevronsUpDownIcon className="ml-auto" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>{" "}
    </>
  )
}
