import {
    RadialBarChart,
    RadialBar,
    ResponsiveContainer
  } from "recharts";
  
  type CircularProgressProps = {
    value: number;
    size?: number;
  };
  
  export const CircularProgress = ({
    value,
    size = 100
  }: CircularProgressProps) => {
    const data = [{ name: "progress", value }];
  
    return (
      <div
        className="relative"
        style={{ width: size, height: size }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="70%"
            outerRadius="100%"
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar
              dataKey="value"
              cornerRadius={10}
              fill="#16A34A"
              background={{ fill: "#E5E7EB" }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
  
        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-[#1D3557]">
            {value}%
          </span>
        </div>
      </div>
    );
  };
  