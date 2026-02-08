import { BellIcon } from "@/assets/icons";
import { useToggle } from "@/hooks/useToggle";
import { useEffect, useRef } from "react";


export const NotificationBell = () => {
    const { value: open, toggle, setFalse } = useToggle(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setFalse();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Icon */}
      <div>
        <BellIcon  onClick={toggle} className="relative cursor-pointer" />
        <span className="absolute -top-1 -right-0.5 w-2 h-2 bg-[#DB1F26] rounded-full"></span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-72 bg-white shadow-lg rounded-lg z-50">
          
          <div className="p-2 border-b border-[#E0E8ED] font-semibold">
            Notifications
          </div>

          <div className="p-6 text-center text-gray-400 text-sm">
            No notifications
          </div>

        </div>
      )}

    </div>
  );
};


