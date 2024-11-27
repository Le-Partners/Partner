
// Import icons for the menu items
import { ActivityIcon, CirclePlusIcon, Home, Inbox, Search, Settings } from "lucide-react"

// Import sidebar components from the UI library
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "./ui/sidebar"

// Define the menu items with title, URL, and icon
const items = [
  {
    title: "My Feed",
    url: "/home",        // Home  specific route
    icon: Home,      // Icon component for the Home item
  },

  {
    title: "Tracker",
    url: "#",
    icon: ActivityIcon,
  },

  {
    title: "Find Partner",
    url: "/FindPartner",
    icon: Search,
  },
  {
    title: "Update",
    url: "/Update",
    icon: CirclePlusIcon,
  },

  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Settings",
    url: "/Settings",
    icon: Settings,
  },
]

//TODO  get menu button linked to topbar button to toggle open andl close

// Define the AppSidebar component to render the sidebar with the menu
export function AppSidebar() {
  return (
    <Sidebar>
      {/* Optional header for the sidebar */}
      <SidebarHeader />

      {/* Main content of the sidebar */}
      <SidebarContent>
        {/* Sidebar group to organize items under a label */}
        <SidebarGroup>
          <SidebarGroupLabel>Partner</SidebarGroupLabel>  {/* Label for the group of menu items */}
          <SidebarGroupContent style={{ paddingTop: `110px` }}>
            {/* Sidebar menu to hold the list of menu items */}
            <SidebarMenu>
              {/* Map through the items array to render each menu item */}
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="py-3">
                  <SidebarMenuButton asChild>
                    {/* Each menu item links to the specified URL and displays an icon and title */}
                    <a href={item.url}>
                      <item.icon />        {/* Display the icon for the menu item */}
                      <span className="text-2xl ml-2">{item.title}</span> {/* Display the title of the menu item */}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Optional footer for the sidebar */}
      <SidebarFooter />
    </Sidebar>
  )
}
