import type { PerspectiveColumnType } from "@/@types/types";
import { PerspectiveColumn } from "./PrepectiveColumn";
import { ProgressLegend } from "./ProgressLegend";
import { CardWithContent } from "@/components/ui/CardWithContent";

type Props = {
  columns: PerspectiveColumnType[];
};

export const ProgressStatusBoard = ({ columns }: Props) => {
  return (
    <CardWithContent title="Progress Status" rightContent={<ProgressLegend />}>
      {/* Responsive Layout */}
      <div
        className="
          flex flex-col gap-6
          sm:flex-row sm:gap-4
          sm:overflow-x-auto
          sm:pb-2
        "
      >
        {columns.map((column) => (
          <div
            key={column.id}
            className="
              max-w-full
              sm:max-w-[260px]
              lg:max-w-[240px]
            "
          >
            <PerspectiveColumn column={column} />
          </div>
        ))}
      </div>
    </CardWithContent>
  );
};
