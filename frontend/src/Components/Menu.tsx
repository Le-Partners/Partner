import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Import icons for the menu items
import { ActivityIcon, CirclePlusIcon, Home, Inbox, Search, Settings } from "lucide-react";

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
} from "./ui/sidebar";

// Define the menu items with title, URL, and icon
const items = [
  { title: "My Feed", url: "/home", icon: Home },
  { title: "Tracker", url: "/Tracker", icon: ActivityIcon },
  { title: "Find Partner", url: "/FindPartner", icon: Search },
  { title: "Update", url: "/Update", icon: CirclePlusIcon },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Settings", url: "/Settings", icon: Settings },
];

// Define the AppSidebar component
export function AppSidebar() {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Handle logout using Firebase auth
  const handleLogout = async () => {
    try {
      setIsLoggingOut(true); // Set logging out state
      await auth.signOut(); // Sign out using Firebase auth
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  // Trigger navigation to the login page after logout
  useEffect(() => {
    if (isLoggingOut) {
      navigate("/login");
    }
  }, [isLoggingOut, navigate]);

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Partner</SidebarGroupLabel>
          <SidebarGroupContent style={{ paddingTop: `110px` }}>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="py-3">
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span className="text-2xl ml-2">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuItem>
          <SidebarMenuButton onClick={handleLogout} className="py-3">
            <span className="text-2xl ml-2">Logout</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  );
}
