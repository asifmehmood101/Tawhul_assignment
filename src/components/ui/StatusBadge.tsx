import type { DocumentStatus } from "@/@types/types";

type StatusBadgeProps = {
  status: DocumentStatus;
};

const styles = {
    approved: "bg-green-100 text-green-600",
    pending: "bg-yellow-100 text-yellow-600",
    rejected: "bg-red-100 text-red-600"
  };

  const labels = {
    approved: "Approved",
    pending: "Pending Review",
    rejected: "Rejected"
  };


export const StatusBadge = ({ status }: StatusBadgeProps) => {
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
      {labels[status]}
    </span>
  );
};
