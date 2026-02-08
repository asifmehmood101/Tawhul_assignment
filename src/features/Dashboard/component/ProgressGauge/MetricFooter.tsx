type FooterStat = {
    value: string | number;
    label: string;
  };
  
  type MetricFooterProps = {
    stats: FooterStat[];
  };
  
  export const MetricFooter = ({ stats }: MetricFooterProps) => {
    if (!stats?.length) return null;
  
    return (
      <div className="w-full pt-4 border-t border-[#E0E8ED] grid grid-cols-2 gap-4 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-2xl font-bold text-[#1D3557]">
              {stat.value}
            </div>
            <div className="text-sm text-gray-500">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    );
  };
  