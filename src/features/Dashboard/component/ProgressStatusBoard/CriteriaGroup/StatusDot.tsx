import { STATUS_CONFIG } from "../statusConfig";
import type { FilteredStatusType } from "@/@types/types";

type StatusDotProps = {
  number: number;
  status: FilteredStatusType;
};

export const StatusDot = ({ number, status }: StatusDotProps) => {
  const config = STATUS_CONFIG[status];

  return (
    <div
      className="w-6 h-6 py-1 px-1.75 rounded-full flex items-center justify-center text-white text-sm font-medium"
      style={{ backgroundColor: config.color }}
    >
      {number}
    </div>
  );
};
