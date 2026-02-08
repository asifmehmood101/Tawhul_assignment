import { Card } from "@/components/ui/Card";

type StatCardProps = {
  value: string | number;
  label: string;
  icon: React.ReactNode;
  className?: string;
};

export const StatCard = ({
  value,
  label,
  icon,
  className = ""
}: StatCardProps) => {
  return (
    <Card className={`flex flex-col gap-3 w-full ${className}`}>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-[#1D3557]">
            {value}
          </h3>
              {icon}
        </div>

        <p className="text-sm text-[#8597A8]">
          {label}
        </p>
    </Card>
  );
};
