import { StatCard } from "./StatCard";
import type { EvidenceStatItem } from "@/@types/types";

type EvidenceStatsSectionProps = {
  items: EvidenceStatItem[];
};
  
  export const EvidenceStatsSection = ({
    items
  }: EvidenceStatsSectionProps) => {
    return (
      <div
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      >
        {items.map((item) => (
          <StatCard
            key={item.id}
            value={item.value}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>
    );
  };
  