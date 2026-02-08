import { CardWithContent } from "@/components/ui/CardWithContent";
import { Skeleton } from "@/components/ui/Skeleton";
import { Tab } from "@/components/common";

export const SummarySectionSkeleton = () => {
  return (
    <Tab
      tabs={[
        {
          value: "overview",
          label: "Overview",
          content: (
            <div className="space-y-6">
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton width="200px" height="18px" />
                    <Skeleton width="100%" height="60px" />
                  </div>
                ))}
              </div>
              <CardWithContent title="Leaders">
                <div className="flex gap-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex-1 space-y-2">
                      <Skeleton width="40px" height="40px" className="rounded-full mx-auto" />
                      <Skeleton width="80%" height="16px" className="mx-auto" />
                      <Skeleton width="60%" height="14px" className="mx-auto" />
                    </div>
                  ))}
                </div>
              </CardWithContent>
            </div>
          ),
        },
        {
          value: "evidence",
          label: "Evidence",
          content: (
            <div className="space-y-6">
              <CardWithContent title="Documents">
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-4">
                      <Skeleton width="100px" height="16px" />
                      <Skeleton width="200px" height="16px" />
                      <Skeleton width="120px" height="16px" />
                      <Skeleton width="120px" height="16px" />
                      <Skeleton width="80px" height="24px" className="rounded" />
                    </div>
                  ))}
                </div>
              </CardWithContent>
              <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6">
                <CardWithContent title="Comments">
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Skeleton width="100px" height="16px" />
                          <Skeleton width="80px" height="14px" />
                        </div>
                        <Skeleton width="100%" height="40px" />
                      </div>
                    ))}
                    <Skeleton width="100%" height="80px" />
                    <Skeleton width="120px" height="36px" className="rounded-xl" />
                  </div>
                </CardWithContent>
                <CardWithContent title="Recent Activities">
                  <div className="flex flex-col h-[210px] gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="space-y-2">
                        <Skeleton width="70%" height="16px" />
                        <Skeleton width="90%" height="14px" />
                        <Skeleton width="100px" height="12px" />
                      </div>
                    ))}
                  </div>
                </CardWithContent>
              </div>
            </div>
          ),
        },
      ]}
      defaultValue="overview"
    />
  );
};

