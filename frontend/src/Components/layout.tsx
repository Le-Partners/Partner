import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Menu"
import NavBar from './TopBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      {/* Include the sidebar */}
      <AppSidebar />
      
      
      {/* Main content with SidebarTrigger for toggling */}
      <main>
      <SidebarTrigger className=" top-4 -right-8 z-10 bg-gray-800 text-white rounded-full p-2 shadow-md" />
        {children}
      </main>
    </SidebarProvider>
  )
}
