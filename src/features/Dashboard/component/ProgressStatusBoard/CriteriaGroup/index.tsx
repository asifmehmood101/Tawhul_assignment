import { useNavigate } from "react-router-dom";
import type { CriteriaGroupType, FilteredStatusType } from "@/@types/types";
import { StatusDot } from "./StatusDot";

type Props = {
  group: CriteriaGroupType;
};

export const CriteriaGroup = ({ group }: Props) => {
  const navigate = useNavigate();
  const isClickable = group.title === "Digital Transformation";

  const handleClick = () => {
    if (isClickable) {
      navigate("/digital-transformation-strategic-planning");
    }
  };

  return (
    <div 
      className={`bg-[#F5F8FB] border border-[#E2E8F0] rounded-lg p-3 relative ${
        isClickable 
          ? "cursor-pointer hover:bg-[#E8F0F5] transition-all duration-300 hover:shadow-md" 
          : ""
      }`}
      onClick={handleClick}
    >
      {isClickable && (
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D3557] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1D3557]"></span>
        </span>
      )}
      <p className="text-[10px] text-[#1D3557] mb-3 text-center">
        {group.title}
      </p>

      <div className="flex flex-wrap gap-2 justify-center">
        {group.items.map((item) => (
          <StatusDot
            key={item.number}
            number={item.number}
            status={item.status as FilteredStatusType}
          />
        ))}
      </div>
    </div>
  );
};
