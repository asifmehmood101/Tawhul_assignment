import { ClipboardIcon, CloseIcon, FileTextIcon, HomeIcon, ReportsIcon, TaskIcon, ToggleIcon, UserIcon } from "@/assets/icons";
import logo from "@/assets/images/logo.svg";
import { useToggle } from "@/hooks/useToggle";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useCallback } from "react";

const menuItems = [
  { name: "Dashboard", path: "/", icon: HomeIcon },
  { name: "Perspectives", path: "/digital-transformation-strategic-planning", icon: ClipboardIcon },
  { name: "Tasks", path: "/tasks", icon: TaskIcon },
  { name: "Documents", path: "/documents", icon: FileTextIcon },
  { name: "Reports", path: "/reports", icon: ReportsIcon },
  { name: "Users & Roles", path: "/users", icon: UserIcon }
];

interface SidebarProps {
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

export const Sidebar = ({ isMobileOpen = false, onMobileClose }: SidebarProps) => {
  const { value: collapsed, toggle: toggleCollapsed } = useToggle();
  const sidebarRef = useRef<HTMLElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const openTimeRef = useRef<number>(0);

  // Track when sidebar opens to prevent immediate closing
  useEffect(() => {
    if (isMobileOpen) {
      openTimeRef.current = Date.now();
    }
  }, [isMobileOpen]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (isMobileOpen && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const handleBackdropClick = useCallback(() => {
    // Prevent closing if sidebar was just opened (within 100ms)
    if (Date.now() - openTimeRef.current < 100) {
      return;
    }
    if (onMobileClose) {
      onMobileClose();
    }
  }, [onMobileClose]);

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          ref={backdropRef}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden transition-opacity duration-300"
          onClick={handleBackdropClick}
        />
      )}

      {/* Sidebar */}
      <aside 
        ref={sidebarRef}
        className={`
          h-screen bg-[#1D3557] text-white flex flex-col items-start py-4 
          transition-transform duration-300 ease-in-out
          ${collapsed ? "w-20 px-2" : "w-64 px-6"}
          fixed top-0 left-0 z-50 xl:static xl:z-auto
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}
        `}
      >
        {/* Toggle Btn - Hidden on mobile/tablet/laptop */}
        <ToggleIcon
          onClick={toggleCollapsed}
          className={`hidden xl:block shadow-2xl absolute -right-4.5 top-10 transition-transform duration-300 cursor-pointer ${
            collapsed ? "rotate-180" : ""
          }`}
        />

        {/* Close Button for Mobile/Tablet/Laptop */}
        {isMobileOpen && onMobileClose && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onMobileClose();
            }}
            className="xl:hidden absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close menu"
          >
            <CloseIcon size={24} color="currentColor" />
          </button>
        )}

        {/* Logo */}
        <div className="mb-6">
          <img src={logo} alt="Tawhul Logo" className={`mx-auto transition-all ${collapsed ? "w-12" : "w-32"}`} />
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-2 w-full">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                title={collapsed ? item.name : ""}
                className={({ isActive }) =>
                  `flex items-center ${collapsed ? "justify-center" : "gap-3"} text-sm p-3 rounded-lg transition
                  ${isActive ? "bg-[#2F4C73]" : "text-gray-300 hover:bg-[#2F4C73]"}`
                }
                onClick={() => {
                  // Close mobile sidebar when a link is clicked
                  if (isMobileOpen && onMobileClose) {
                    onMobileClose();
                  }
                }}
              >
                <Icon />
                {!collapsed && <span>{item.name}</span>}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};


