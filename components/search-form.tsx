"use client"

import { SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar"
import { Separator } from "./ui/separator"

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative mb-1"></SidebarGroupContent>
        <Separator />
      </SidebarGroup>
    </form>
  )
}
