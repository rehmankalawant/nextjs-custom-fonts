"use client"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Button } from "./ui/button"

export function SideBarTopProfile() {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light")
            }}
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
            {theme === "light" ? (
              <Button className="ml-auto rounded-sm" variant={"outline"} size={"icon-sm"}>
                <Sun />
              </Button>
            ) : (
              <Button className="ml-auto rounded-sm" variant={"outline"} size={"icon-sm"}>
                <Moon />
              </Button>
            )}
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>{" "}
    </>
  )
}
