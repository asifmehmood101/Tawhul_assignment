import type { PerspectiveColumnType } from "@/@types/types";
import { CriteriaGroup } from "../CriteriaGroup";

type Props = {
  column: PerspectiveColumnType;
};

export const PerspectiveColumn = ({ column }: Props) => {
  return (
    <div className="max-w-[240px]">
      {/* Header */}
      <div className="bg-[#243B55] text-white rounded-xl px-2 py-4 text-center ">
        <p className="text-xs font-bold leading-tight mb-3">
          {column.title}
        </p>
        <div className="bg-white/20 rounded-full px-2.5 py-0.75 inline-block">
          <span className="text-sm font-bold">
            {column.percentage.toFixed(2)}%
          </span>
        </div>
      </div>

      {/* Groups */}
      <div className="mt-3 space-y-3">
        {column.groups.map((group) => (
          <CriteriaGroup key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
};
