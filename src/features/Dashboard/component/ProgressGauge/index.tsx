import { CardWithContent } from "@/components/ui/CardWithContent";
import { HalfRadialGauge } from "@/features/Dashboard/component/ProgressGauge/HalfRadialGauge";
import { MetricCenter } from "@/features/Dashboard/component/ProgressGauge/MetricCenter";
import { MetricFooter } from "@/features/Dashboard/component/ProgressGauge/MetricFooter";

type FooterStat = {
  value: string | number;
  label: string;
};

type GaugeCardProps = {
  title: string;
  value: number;
  label: string;
  color: string;
  footerStats?: FooterStat[];
};

export const GaugeCard = ({
  title,
  value,
  label,
  color,
  footerStats
}: GaugeCardProps) => {
  return (
    <CardWithContent title={title}>
      <div className="flex flex-col items-center relative">
        
        <HalfRadialGauge value={value} color={color} />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

          <MetricCenter value={value} label={label} />
        </div>
      
        <MetricFooter stats={footerStats || []} />
      </div>
    </CardWithContent>
  );
};
