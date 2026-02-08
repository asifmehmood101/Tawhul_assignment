import { CardWithContent } from "@/components/ui/CardWithContent";
import { Skeleton } from "@/components/ui/Skeleton";

export const PerspectiveLeadersSkeleton = () => {
  return (
    <CardWithContent title="Top Performing Perspective Leaders">
      <div className="flex flex-col h-[210px] gap-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton width="40px" height="40px" className="rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton width="60%" height="16px" />
              <Skeleton width="40%" height="14px" />
            </div>
            <Skeleton width="50px" height="20px" />
          </div>
        ))}
      </div>
    </CardWithContent>
  );
};

