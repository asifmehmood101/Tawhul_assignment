import { Card } from "@/components/ui";

type StatCardProps = {
    value: number;
    label: string;
    icon: React.ReactNode;
  };
  
  export const StatCard = ({
    value,
    label,
    icon
  }: StatCardProps) => {
    return (
      <Card
        className="flex items-end gap-3"
      >

        {/* Icon */}
        <div className="text-red-500 mb-3">
          {icon}
        </div>
  <div className="">

        {/* Value */}
        <p className="text-2xl font-bold text-[#1D3557]">
          {value}
        </p>
  
        {/* Label */}
        <p className="text-sm text-[#8597A8] mt-1">
          {label}
        </p>
  </div>
      </Card>
    );
  };
  