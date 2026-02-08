export type StatusType =
  | "not_started"
  | "in_progress"
  | "completed"
  | "partially_uploaded"
  | "fully_uploaded"
  | "delayed"
  | "approved"
  | "pending"
  | "rejected";


  export type FilteredStatusType = Exclude<
  StatusType,
  "approved" | "pending" | "rejected"
>; 
export type DocumentStatus = Extract<StatusType,"approved" | "pending" | "rejected">;

export type PerspectiveLeader = {
    id: string;
    name: string;
    perspective: string;
    score: number;
    avatarUrl: string;
  };
  

  export type ActivityItemType = {
    id: string;
    title: string;
    description: string;
    timeAgo: string;
  };
  

  export type StatusItem = {
    number: number;
    status: StatusType;
  };
  
  export type CriteriaGroupType = {
    id: string;
    title: string;
    items: StatusItem[];
  };
  
  export type PerspectiveColumnType = {
    id: string;
    title: string;
    percentage: number;
    groups: CriteriaGroupType[];
  };

export type EvidenceStatItem = {
  id: string;
  value: number;
  label: string;
  icon: React.ReactNode;
};

export type OverviewDetailItem = {
  label: string;
  content: string | React.ReactNode;
};

export type OverviewLeader = {
  id: string;
  name: string;
  subtitle: string;
  avatarUrl: string;
};

export type Comment = {
  id: string;
  author: string;
  message: string;
  date: string;
};

export type Activity = {
  id: string;
  title: string;
  description: string;
  timeAgo: string;
};
  