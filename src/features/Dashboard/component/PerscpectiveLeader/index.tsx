import React from "react";
import { CardWithContent } from "@/components/ui/CardWithContent";
import { LeaderRow } from "./LeaderRow";
import type { PerspectiveLeader } from "@/@types/types";

type PerspectiveLeadersCardProps = {
  title?: string;
  leaders: PerspectiveLeader[];
  rightContent?: React.ReactNode;
  className?: string;
};

export const PerspectiveLeadersCard = ({
  title = "Top Performing Perspective Leaders",
  leaders,
  rightContent,
  className
}: PerspectiveLeadersCardProps) => {
  return (
    <CardWithContent
      title={title}
      rightContent={rightContent}
      className={className}
    >
      <div className="flex flex-col h-[210px] overflow-y-auto">
        {leaders.map((leader, index) => (
          <LeaderRow
            key={leader.id}
            leader={leader}
            showDivider={index !== leaders.length - 1}
          />
        ))}
      </div>
    </CardWithContent>
  );
};
