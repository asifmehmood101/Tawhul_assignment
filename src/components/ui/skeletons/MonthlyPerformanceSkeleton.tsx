import { CardWithContent } from "@/components/ui/CardWithContent";
import { Skeleton } from "@/components/ui/Skeleton";

// Predefined heights for consistent skeleton appearance
const barHeights = [45, 50, 55, 60, 65, 70, 65, 75, 80, 75, 85, 90];

export const MonthlyPerformanceSkeleton = () => {
  return (
    <CardWithContent title="12-Month Performance">
      <div className="h-[320px] flex flex-col justify-end gap-2">
        <div className="flex items-end justify-between gap-2 h-full">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <Skeleton 
                width="100%" 
                height={`${barHeights[i - 1]}%`} 
                className="rounded-t"
              />
              <Skeleton width="30px" height="14px" />
            </div>
          ))}
        </div>
      </div>
    </CardWithContent>
  );
};

