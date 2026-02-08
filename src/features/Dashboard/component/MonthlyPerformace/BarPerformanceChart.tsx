import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export type BarPerformanceChartData = {
  month: string;
  value: number;
};

type BarPerformanceChartProps = {
  data: BarPerformanceChartData[];
  height?: number | string;
  dataKey?: string;
  xKey?: string;
};

export const BarPerformanceChart = ({
  data,
  height = "100%",
  dataKey = "value",
  xKey = "month"
}: BarPerformanceChartProps) => {
  const gradientId = React.useId();

  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              {/* Top */}
              <stop offset="0%" stopColor="#0078D7" stopOpacity={1} />
              {/* Bottom (0% opacity) */}
              <stop offset="100%" stopColor="#0078D7" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            stroke="#E0E8ED"
          />

          <XAxis
            dataKey={xKey}
            tick={{ fill: "#6C7A89", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: "#6C7A89", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.03)" }}
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid #E0E8ED"
            }}
          />

          <Bar
            dataKey={dataKey}
            fill={`url(#${gradientId})`}
            radius={[6, 6, 0, 0]}
            barSize={32}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
