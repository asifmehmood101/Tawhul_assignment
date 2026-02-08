import { CardWithContent } from "@/components/ui/CardWithContent";
import { Skeleton } from "@/components/ui/Skeleton";

export const ProgressStatusBoardSkeleton = () => {
  return (
    <CardWithContent title="Progress Status">
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-4 sm:overflow-x-auto sm:pb-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="max-w-full sm:max-w-[260px] lg:max-w-[240px]">
            <div className="space-y-4">
              <div className="space-y-2">
                <Skeleton width="80%" height="20px" />
                <Skeleton width="60px" height="16px" />
              </div>
              {[1, 2, 3].map((j) => (
                <div key={j} className="space-y-2">
                  <Skeleton width="70%" height="16px" />
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((k) => (
                      <Skeleton key={k} width="24px" height="24px" className="rounded-full" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CardWithContent>
  );
};

