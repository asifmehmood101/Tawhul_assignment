import { Table } from "@/components/common";
import { StatusBadge } from "@/components/ui";
import type { DocumentStatus } from "@/@types/types";
import { Card } from "@/components/ui";

export type DocumentRow = {
  number: string;
  name: string;
  lead: string;
  preparer: string;
  date: string;
  dueDate: string;
  status: DocumentStatus;
};

type DocumentTableProps = {
  data: DocumentRow[];
};

const columns = [
  { header: "Document Number", accessor: "number" as keyof DocumentRow },
  { header: "Document Name", accessor: "name" as keyof DocumentRow },
  { header: "Document Lead", accessor: "lead" as keyof DocumentRow },
  { header: "Document Preparer", accessor: "preparer" as keyof DocumentRow },
  { header: "Date", accessor: "date" as keyof DocumentRow },
  { header: "Due Date", accessor: "dueDate" as keyof DocumentRow },
  {
    header: "Status",
    accessor: "status" as keyof DocumentRow,
    render: (value: DocumentRow[keyof DocumentRow]) => (
      <StatusBadge status={value as DocumentStatus} />
    )
  }
];

export const DocumentTable = ({ data }: DocumentTableProps) => {
  return (
    <Card>
      <Table columns={columns} data={data} />
    </Card>
  );
};

