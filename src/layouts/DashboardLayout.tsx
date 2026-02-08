import { Navbar } from "@/components/layout/NavBar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Outlet } from "react-router-dom";
import { useToggle } from "@/hooks/useToggle";

export const DashboardLayout = () => {
  const { value: isMobileSidebarOpen, toggle: toggleMobileSidebar, setFalse: closeMobileSidebar } = useToggle(false);

  return (
    <div className="flex h-screen">
      <Sidebar 
        isMobileOpen={isMobileSidebarOpen} 
        onMobileClose={closeMobileSidebar}
      />
      <div className="flex flex-col flex-1 w-full xl:w-auto">
        <Navbar onMenuClick={toggleMobileSidebar} />
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 xl:p-6">
          <Outlet />
        </main>
      </div> 
    </div>
  );
};



