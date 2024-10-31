
// Import icons for the menu items
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

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
} from "@/components/ui/sidebar"

// Define the menu items with title, URL, and icon
const items = [
  {
    title: "Home",
    url: "#",        // Home  specific route
    icon: Home,      // Icon component for the Home item
  },
  {
    title: "Inbox",
    url: "#",        
    icon: Inbox,    
  },
  {
    title: "Calendar",
    url: "#",        
    icon: Calendar,  
  },
  {
    title: "Search",
    url: "#",        
    icon: Search,    
  },
  {
    title: "Settings",
    url: "#",        
    icon: Settings, 
  },
]

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
          <SidebarGroupLabel>Application</SidebarGroupLabel>  {/* Label for the group of menu items */}
          <SidebarGroupContent>
            {/* Sidebar menu to hold the list of menu items */}
            <SidebarMenu>
              {/* Map through the items array to render each menu item */}
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {/* Each menu item links to the specified URL and displays an icon and title */}
                    <a href={item.url}>
                      <item.icon />        {/* Display the icon for the menu item */}
                      <span>{item.title}</span> {/* Display the title of the menu item */}
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
