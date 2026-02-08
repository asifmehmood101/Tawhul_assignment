import type { TimelineEvent } from './Timeline';

type Position = {
  percentage: number;
};

type TimelineLabelsProps = {
  events: TimelineEvent[];
  positions: Position[];
};

export const TimelineLabels = ({ events, positions }: TimelineLabelsProps) => {
  return (
    <div className="relative mt-6 min-h-[70px] sm:min-h-[60px]">
      {events.map((event, index) => {
        const { percentage } = positions[index];

        return (
          <div
            key={event.id}
            className={`text-sm absolute flex flex-col items-center top-3.5 -translate-x-1/2 -translate-y-1/2`}
            style={{ left: `${percentage}%` }}
          >
            <p className="text-[#8597A8] mb-1 whitespace-nowrap">
              {event.date}
            </p>
            <p className="font-semibold text-[#1D3557] text-center px-1 max-w-[100px] sm:max-w-none whitespace-nowrap">
              {event.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

