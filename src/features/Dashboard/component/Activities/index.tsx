import React from "react";
import { CardWithContent } from "@/components/ui/CardWithContent";
import { ActivityItem } from "./ActivityItem";
import type { ActivityItemType } from "@/@types/types";

type RecentActivitiesCardProps = {
  activities: ActivityItemType[];
  title?: string;
  rightContent?: React.ReactNode;
  className?: string;
};

export const RecentActivitiesCard = ({
  activities,
  title = "Recent Activities",
  rightContent,
  className
}: RecentActivitiesCardProps) => {
  return (
    <CardWithContent
      title={title}
      rightContent={rightContent}
      className={className}
    >
      <div className="flex flex-col h-[210px] overflow-y-auto">
        {activities.map((activity, index) => (
          <ActivityItem
            key={activity.id}
            activity={activity}
            showDivider={index !== activities.length - 1}
          />
        ))}
      </div>
    </CardWithContent>
  );
};
