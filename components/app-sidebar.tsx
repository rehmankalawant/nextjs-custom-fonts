import { SearchForm } from "@/components/search-form"
import { SideBarTopProfile } from "@/components/sidebar-top-profile"
import { SidebarNav } from "@/components/sidebar-nav"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
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

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SideBarTopProfile />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarNav items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
