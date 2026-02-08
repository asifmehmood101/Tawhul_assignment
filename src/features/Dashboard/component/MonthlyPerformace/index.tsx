import { CardWithContent } from "@/components/ui/CardWithContent";
import { BarPerformanceChart, type BarPerformanceChartData } from "./BarPerformanceChart";

type MonthlyPerformanceCardProps = {
  data: BarPerformanceChartData[];
};

export const MonthlyPerformanceCard = ({ data }: MonthlyPerformanceCardProps) => {
  return (
    <CardWithContent title="12-Month Performance">
      <BarPerformanceChart data={data} height={320} />
    </CardWithContent>
  );
};
