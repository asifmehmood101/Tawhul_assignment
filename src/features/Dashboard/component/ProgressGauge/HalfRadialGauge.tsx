import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis
} from "recharts";

type HalfRadialGaugeProps = {
  value: number;
  color: string;
  height?: number;
};

export const HalfRadialGauge = ({
  value,
  color,
  height = 250
}: HalfRadialGaugeProps) => {
  const data = [{ name: "progress", value }];

  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="100%"
          startAngle={180}
          endAngle={0}
          data={data}
        >
          {/* THIS controls the scale */}
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            tick={false}
          />

          <RadialBar
            dataKey="value"
            fill={color}
            background
            cornerRadius={20}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};
