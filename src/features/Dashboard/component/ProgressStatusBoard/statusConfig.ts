import type { FilteredStatusType } from "@/@types/types";

export const STATUS_CONFIG: Record<
  FilteredStatusType,
  { label: string; color: string }
> = {
  not_started: {
    label: "Not Started",
    color: "#8597A8"
  },
  in_progress: {
    label: "In Progress",
    color: "#F59F0A"
  },
  completed: {
    label: "Completed",
    color: "#1EA54E"
  },
  partially_uploaded: {
    label: "Partially Uploaded",
    color: "#004479"
  },
  fully_uploaded: {
    label: "Fully Uploaded",
    color: "#0078D7"
  },
  delayed: {
    label: "Delayed",
    color: "#F50A0A"
  }
};
