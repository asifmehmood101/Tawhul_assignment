import { useMemo } from 'react';
import { ProgressBar } from './ProgressBar';
import { TimelineMarkers } from './TimelineMarkers';
import { TimelineLabels } from './TimelineLabels';

export type TimelineEvent = {
  id: string;
  date: string;
  label: string;
  isCompleted: boolean;
};

type TimelineProps = {
  events: TimelineEvent[];
  className?: string;
};

export const Timeline = ({ events, className = "" }: TimelineProps) => {
  const timelineData = useMemo(() => {
    if (events.length === 0) return null;

    const LEFT_PADDING = 4;
    const RIGHT_PADDING = 8;

    // Find last completed event
    let lastCompletedIndex = -1;
    for (let i = events.length - 1; i >= 0; i--) {
      if (events[i]?.isCompleted) {
        lastCompletedIndex = i;
        break;
      }
    }

    // Calculate positions with padding
    const positions = events.map((_, index) => {
      const raw = index / (events.length - 1);
      const percentage =
        LEFT_PADDING +
        raw * (100 - LEFT_PADDING - RIGHT_PADDING);

      return {
        percentage,
      };
    });

    // Progress should end exactly at the completed marker
    const progressPercentage =
      lastCompletedIndex >= 0
        ? positions[lastCompletedIndex].percentage
        : 0;

        const minWidth =
        events.length > 4
          ? `${Math.max(events.length * 140, 600)}px`
          : "100%";

    return {
      progressPercentage,
      positions,
      minWidth,
    };
  }, [events]);

  if (!timelineData) return null;

  const { progressPercentage, positions, minWidth } = timelineData;

  return (
    <div className={`w-full ${className}`}>
      <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="relative w-full" style={{ minWidth }}>
          <div className="relative w-full h-[14px]">
            <ProgressBar progressPercentage={progressPercentage} />
            <TimelineMarkers events={events} positions={positions} />
          </div>
          <TimelineLabels events={events} positions={positions} />
        </div>
      </div>
    </div>
  );
};
