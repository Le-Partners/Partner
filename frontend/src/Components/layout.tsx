import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar"
import { AppSidebar } from "@/Components/Menu"
import NavBar from './NavBar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
          <div className="flex">
            {/* Sidebar on the left */}
            <div className="relative">
              <AppSidebar />
    
              {/* Sidebar Trigger positioned next to the sidebar */}
              
            
            </div>
    
            {/* Main content area */}
            <main className="flex-grow p-4">
              {children}
            </main>
          </div>
        </SidebarProvider>
      );
}