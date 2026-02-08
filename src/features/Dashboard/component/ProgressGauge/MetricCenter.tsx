type MetricCenterProps = {
    value: number;
    label: string;
  };
  
  export const MetricCenter = ({ value, label }: MetricCenterProps) => {
    return (
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold text-[#1D3557]">
          {value}%
        </span>
        <span className="text-sm text-gray-500">
          {label}
        </span>
      </div>
    );
  };
  