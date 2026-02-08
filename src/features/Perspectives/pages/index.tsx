import { StrategicSummaryCard } from "@/features/Perspectives/components/StragicSummaryCard";
import { EvidenceStatsSection } from "@/features/Perspectives/components/EvidenceStats";
import { FileStackIcon, FileSearchIcon, DocumentFlagIcon, DocumentEditIcon, LeftArrowIcon } from "@/assets/icons";
import { SummarySection } from "@/features/Perspectives/components/SummarySection";
import { Link } from "react-router-dom";
import {
  useGetEvidenceStatsQuery,
  useGetOverviewDetailsQuery,
  useGetOverviewLeadersQuery,
  useGetDocumentsQuery,
  useGetCommentsQuery,
  useGetPerspectivesActivitiesQuery,
  useAddCommentMutation,
} from "@/features/Perspectives/api/perspectivesApi";
import {
  EvidenceStatsSkeleton,
  SummarySectionSkeleton,
} from "@/components/ui/skeletons";

const PerspectivesPage = () => {
  const { data: evidenceStatsData = [], isLoading: evidenceStatsLoading } = useGetEvidenceStatsQuery();
  const { data: overviewDetailItems = [], isLoading: overviewDetailsLoading } = useGetOverviewDetailsQuery();
  const { data: overviewLeaders = [], isLoading: overviewLeadersLoading } = useGetOverviewLeadersQuery();
  const { data: documentTableData = [], isLoading: documentsLoading } = useGetDocumentsQuery();
  const { data: commentsData = [], isLoading: commentsLoading } = useGetCommentsQuery();
  const { data: activitiesData = [], isLoading: activitiesLoading } = useGetPerspectivesActivitiesQuery();
  const [addComment] = useAddCommentMutation();

  // Map evidence stats with icons
  const evidenceStatsMockData = evidenceStatsData.map((stat, index) => {
    const icons = [
      <FileStackIcon key="total" />,
      <FileSearchIcon key="review" />,
      <DocumentFlagIcon key="progress" />,
      <DocumentEditIcon key="completed" />,
    ];
    return {
      ...stat,
      icon: icons[index] || null,
    };
  });

  const handleCommentSubmit = async (message: string) => {
    try {
      await addComment({ message }).unwrap();
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  const isLoading = evidenceStatsLoading || overviewDetailsLoading || overviewLeadersLoading || documentsLoading || commentsLoading || activitiesLoading;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Link
          to="/"
          aria-label="Go back to dashboard"
        >
          <LeftArrowIcon size={16} color="#1D3557" />
        </Link>
        <h1 className="text-base font-bold text-[#1D3557]">Digital Transformation Strategic Planning</h1>
      </div>

      <StrategicSummaryCard
        category="Strategy & Planning"
        title="Digital Transformation Strategic Planning"
        description="Develop comprehensive strategic plans for digital transformation aligned with organizational goals"
        progress={100}
      />
      
      {evidenceStatsLoading ? (
        <EvidenceStatsSkeleton />
      ) : (
        <EvidenceStatsSection items={evidenceStatsMockData} />
      )}

      {isLoading ? (
        <SummarySectionSkeleton />
      ) : (
        <SummarySection 
          detailItems={overviewDetailItems}
          leaders={overviewLeaders}
          documents={documentTableData}
          comments={commentsData}
          activities={activitiesData}
          onCommentSubmit={handleCommentSubmit}
        />
      )}
    </div>
  );
};

export default PerspectivesPage;
