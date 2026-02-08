import { CardWithContent } from "@/components/ui/CardWithContent";
import { Skeleton } from "@/components/ui/Skeleton";

export const ActivitiesSkeleton = () => {
  return (
    <CardWithContent title="Recent Activities">
      <div className="flex flex-col h-[210px] gap-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="space-y-2">
            <Skeleton width="70%" height="16px" />
            <Skeleton width="90%" height="14px" />
            <Skeleton width="100px" height="12px" />
          </div>
        ))}
      </div>
    </CardWithContent>
  );
};

