// import * as React from "react"
import { headers } from "next/headers"
import { SearchForm } from "@/components/search-form"
import { SideBarTopProfile } from "@/components/sidebar-top-profile"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "INTRODUCTION",
      url: "/",
      items: [
        {
          title: "Introduction",
          url: "/",
        },
      ],
    },
    {
      title: "CUSTOM FONTS",
      url: "/",
      items: [
        {
          title: "Normal Font",
          url: "/fonts/normal-font",
        },
        {
          title: "Barriecito",
          url: "/fonts/font-barriecito",
        },
        {
          title: "Caveat Brush",
          url: "/fonts/font-caveat-brush",
        },
        {
          title: "Comic Relief",
          url: "/fonts/font-comic-relief",
        },
        {
          title: "Kranky",
          url: "/fonts/font-kranky",
        },
        {
          title: "Major Mono Display",
          url: "/fonts/font-major-mono-display",
        },
        {
          title: "Matemasie",
          url: "/fonts/font-matemasie",
        },
        {
          title: "Oswald",
          url: "/fonts/font-oswald",
        },
        {
          title: "Quantico",
          url: "/fonts/font-quantico",
        },
        {
          title: "Ribeye Marrow",
          url: "/fonts/font-ribeye-marrow",
        },
        {
          title: "Yantra One",
          url: "/fonts/font-yantra-one",
        },
      ],
    },
  ],
}

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  // For getting pathname on server side
  const headersList = await headers()
  const pathname = headersList.get("x-pathname")

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SideBarTopProfile />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
