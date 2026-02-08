import type { ActivityItemType } from "@/@types/types";

type ActivityItemProps = {
    activity: ActivityItemType;
    showDivider?: boolean;
  };
  
  export const ActivityItem = ({
    activity,
    showDivider = false
  }: ActivityItemProps) => {
    return (
      <>
        <div className="flex items-start justify-between gap-3 py-4 text-base">
          <div className="flex items-start gap-3">
            {/* Red Dot */}
            <span className="mt-2 w-2 h-2 bg-[#DB1F26] rounded-full shrink-0" />
  
            <div>
              <p className="text-[#1D3557] font-medium">
                {activity.title}
              </p>
              <p className="text-[#6C7A89]">
                {activity.description}
              </p>
            </div>
          </div>
  
          <span className="text-[#8A98A8] whitespace-nowrap">
            {activity.timeAgo}
          </span>
        </div>
  
        {showDivider && (
          <div className="border-t border-[#E0E8ED]" />
        )}
      </>
    );
  };
  