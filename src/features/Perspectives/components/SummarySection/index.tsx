import { Tab } from "@/components/common";
import { OverviewContent } from "./Overview/OverviewContent";
import { DocumentTable } from "./Evidence/DocumentTable";
import { CommentsSection } from "./Evidence/Comments";
import { RecentActivitiesCard } from "@/features/Dashboard/component/Activities";
import type { DetailItem, Leader } from "./Overview/OverviewContent";
import type { DocumentRow } from "./Evidence/DocumentTable";
import type { ActivityItemType, Comment } from "@/@types/types";

type SummarySectionProps = {
  detailItems: DetailItem[];
  leaders: Leader[];
  documents: DocumentRow[];
  comments: Comment[];
  activities?: ActivityItemType[];
  onCommentSubmit?: (message: string) => void;
};

export const SummarySection = ({
  detailItems,
  leaders,
  documents,
  comments,
  activities = [],
  onCommentSubmit
}: SummarySectionProps) => {
  return (
    <Tab
      tabs={[
        {
          value: "overview",
          label: "Overview",
          content: (
            <OverviewContent 
              detailItems={detailItems}
              leaders={leaders}
            />
          ),
        },
        {
          value: "evidence",
          label: "Evidence",
          content: (
            <div className="space-y-6">
              <DocumentTable data={documents} />
              <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 items-start">
                <CommentsSection 
                  comments={comments}
                  onSubmit={onCommentSubmit}
                />
                <RecentActivitiesCard activities={activities} />
              </div>
            </div>
          ),
        },
      ]}
      defaultValue="overview"
    />
  );
};
