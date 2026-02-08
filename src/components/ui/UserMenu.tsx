import { DownArrowIcon } from "@/assets/icons";

interface UserMenuProps {
    name?: string;
    avatarUrl?: string;
}

export const UserMenu = ({ name, avatarUrl }: UserMenuProps) => {
  return (
    <div className="flex bg-[#F9FAFA] rounded-full items-center gap-2 cursor-pointer p-1">

      {/* Avatar */}
      <img
        src={avatarUrl || "https://i.pravatar.cc/40"}
        alt="User"
        className="w-6 h-6 rounded-full"
      />

      {/* Name */}
      <span className="text-xs font-semibold text-gray-700">
       {name || "John Doe"}
      </span>

      <DownArrowIcon className="text-gray-500" />
    </div>
  );
};


