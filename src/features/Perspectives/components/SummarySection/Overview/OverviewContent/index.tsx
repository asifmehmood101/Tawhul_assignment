import { DetailSection } from "../OverviewDetail";
import { LeadersSection } from "../LeaderSection";

export type DetailItem = {
  label: string;
  content: React.ReactNode;
};

export type Leader = {
  id: string;
  name: string;
  subtitle: string;
  avatarUrl: string;
};

type OverviewContentProps = {
  detailItems: DetailItem[];
  leaders: Leader[];
};

export const OverviewContent = ({
  detailItems,
  leaders
}: OverviewContentProps) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Detail Section */}
      <DetailSection items={detailItems} />

      {/* Leaders Section */}
      <LeadersSection leaders={leaders} />
    </div>
  );
};

