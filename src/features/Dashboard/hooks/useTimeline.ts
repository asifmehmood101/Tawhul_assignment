import { type TimelineEvent } from "@/features/Dashboard/component/Timeline";
import { useEffect, useState } from "react";

const initialEvents: TimelineEvent[] = [
  { id: "1", date: "Mar 17", label: "Kickoff Workshop", isCompleted: true },
  { id: "2", date: "March 18", label: "Data Collection", isCompleted: true },
  { id: "3", date: "May 8", label: "Initial Phase", isCompleted: false },
  { id: "4", date: "May 9-July 12", label: "Verification", isCompleted: false },
  { id: "5", date: "July 13", label: "Completion Reviews", isCompleted: false },
  { id: "6", date: "August 21", label: "Cycle Conclusion", isCompleted: false },
];

export const useTimeline = () => {
  const [events, setEvents] = useState<TimelineEvent[]>(initialEvents);
  const [isLoading, _setIsLoading] = useState(false);

  // This hook can be extended to fetch data from an API
  useEffect(() => {
    // Future: Fetch timeline events from API
    // setIsLoading(true);
    // fetchTimelineEvents().then((data) => {
    //   setEvents(data);
    //   setIsLoading(false);
    // });
  }, []);

  const updateEvent = (id: string, updates: Partial<TimelineEvent>) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, ...updates } : event
      )
    );
  };

  return {
    events,
    isLoading,
    updateEvent,
  };
};

