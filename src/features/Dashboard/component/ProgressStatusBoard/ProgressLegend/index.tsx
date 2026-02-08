import { STATUS_CONFIG } from "../statusConfig";

export const ProgressLegend = () => {
  return (
    <div className="flex flex-wrap gap-4 text-xs">
      {Object.entries(STATUS_CONFIG).map(([key, config]) => (
        <div key={key} className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: config.color }}
          />
          <span className="text-[#1D3557]">{config.label}</span>
        </div>
      ))}
    </div>
  );
};
