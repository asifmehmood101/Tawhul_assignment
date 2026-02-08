import { SortIcon } from "@/assets/icons";

type Column<T> = {
    header: string;
    accessor: keyof T;
    render?: (value: T[keyof T], row: T) => React.ReactNode;
  };
  
  type TableProps<T> = {
    columns: Column<T>[];
    data: T[];
  };
  
  export function Table<T>({
    columns,
    data
  }: TableProps<T>) {
    return (
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Header */}
          <thead className="overflow-hidden rounded-t-xl">
            <tr className="bg-[#F1F5F9] text-left text-xs text-[#1D3557] whitespace-nowrap">
              {columns.map((col, index) => (
                <th
                  key={String(col.accessor)}
                  className={`px-4 py-3 font-medium ${
                    index === 0 ? "rounded-tl-xl rounded-bl-xl" : ""
                  } ${
                    index === columns.length - 1 ? "rounded-tr-xl rounded-br-xl" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {col.header}
                    <SortIcon size={12} color="#8597A8" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
  
          {/* Body */}
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-[#E2E8F0] text-sm text-[#1D3557]"
              >
                {columns.map((col) => {
                  const value = row[col.accessor];
  
                  return (
                    <td
                      key={String(col.accessor)}
                      className="px-4 py-4 whitespace-nowrap"
                    >
                      {col.render
                        ? col.render(value, row)
                        : (value as React.ReactNode)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  