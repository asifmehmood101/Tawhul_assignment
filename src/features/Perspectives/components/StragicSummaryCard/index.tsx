import { SummaryTextContent } from "./SummaryTextContent";
import { CircularProgress } from "./CircularProgress";
import { Card } from "@/components/ui";

type StrategicSummaryCardProps = {
  category: string;
  title: string;
  description: string;
  progress: number;
};

export const StrategicSummaryCard = ({
  category,
  title,
  description,
  progress
}: StrategicSummaryCardProps) => {
  return (
    <Card className="flex py-3! flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
  
        {/* Text Content */}
        <SummaryTextContent
          category={category}
          title={title}
          description={description}
        />

        {/* Progress */}
        <div className="flex justify-center sm:justify-end">
          <CircularProgress
            value={progress}
            size={100}
          />
        </div>
    </Card>
  );
};
