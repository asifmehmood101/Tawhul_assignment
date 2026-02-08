import { NotificationBell, SearchInput, UserMenu } from "@/components/ui";
import { MenuIcon } from "@/assets/icons";

interface NavbarProps {
  onMenuClick?: () => void;
}

export const Navbar = ({ onMenuClick }: NavbarProps) => {
  return (
    <header className="h-16 bg-white border-[#E0E8ED] border-b flex items-center justify-between pl-4 xl:pl-12 pr-6 py-3.5 shadow-sm">

      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button - Visible on mobile, tablet, and laptop */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (onMenuClick) {
              onMenuClick();
            }
          }}
          className="xl:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors z-50 relative"
          aria-label="Open menu"
        >
          <MenuIcon size={24} color="currentColor" />
        </button>
        <SearchInput />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 xl:gap-8">
        <NotificationBell />
        <UserMenu name="Mohamed" avatarUrl="https://i.pravatar.cc/40" />
      </div>

    </header>
  );
};
