import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

type ProgressBarProps = {
  progressPercentage: number;
};

export const ProgressBar = ({ progressPercentage }: ProgressBarProps) => {
  const data = [
    {
      name: "progress",
      value: progressPercentage,
    },
  ];

  return (
    <div className="absolute left-0 top-2 w-full h-[14px]">
      <ResponsiveContainer width="100%" height={14}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis type="category" dataKey="name" hide />

          <Bar
            dataKey="value"
            barSize={14}
            fill="#1EA54E"
            radius={[999, 999, 999, 999]}
            background={{
              fill: "#E5E7EB",
              radius: 999,
            }}
            animationDuration={600}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
