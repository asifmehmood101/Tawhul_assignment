import type { TimelineEvent } from './Timeline';

type Position = {
  percentage: number;
};

type TimelineMarkersProps = {
  events: TimelineEvent[];
  positions: Position[];
};

export const TimelineMarkers = ({ events, positions }: TimelineMarkersProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      {events.map((event, index) => {
        const { percentage } = positions[index];

        return (
          <div
            key={event.id}
            className={`absolute flex items-center justify-center top-3.5 -translate-x-1/2 -translate-y-1/2`}
            style={{ left: `${percentage}%` }}
          >
            {/* Marker Dot */}
            <div
              className={`w-2.5 h-2.5 rounded-full ${
                event.isCompleted
                  ? "bg-white"
                  : "bg-[#DB1F26]"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
};

