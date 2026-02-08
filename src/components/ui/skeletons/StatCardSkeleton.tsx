import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

export const StatCardSkeleton = () => {
  return (
    <Card className="flex flex-col gap-3 w-full">
      <div className="flex justify-between items-center">
        <Skeleton width="80px" height="32px" />
        <Skeleton width="24px" height="24px" className="rounded" />
      </div>
      <Skeleton width="120px" height="16px" />
    </Card>
  );
};

