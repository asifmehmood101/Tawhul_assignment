import { Card } from "@/components/ui/Card";

type DetailItem = {
  label: string;
  content: React.ReactNode;
};

type DetailSectionProps = {
  items: DetailItem[];
  className?: string;
};

export const DetailSection = ({
  items,
  className = ""
}: DetailSectionProps) => {
  return (
    <Card className={`p-3 sm:p-5 lg:p-6 ${className}`}>
      <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="
              grid
              grid-cols-1
              gap-3
              lg:grid-cols-[240px_1fr]
              lg:gap-5
               text-base
            "
          >
            {/* Label */}
            <div
              className="
                bg-[#F1F5F9]
                rounded-xl
                px-4 py-3
                text-[#1D3557]
                font-medium
                break-words
                border border-[#E0E8ED]
              "
            >
              {item.label}
            </div>

            {/* Content */}
            <div
              className="
                bg-[#F8FAFC]
                rounded-xl
                px-4 py-3
                text-[#1D3557]
                leading-relaxed
                break-words
                border border-[#E0E8ED]
              "
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
