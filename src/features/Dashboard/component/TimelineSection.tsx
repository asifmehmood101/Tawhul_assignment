import { useState, useEffect, useRef } from "react";
import { Timeline } from "@/features/Dashboard/component/Timeline";
import { useTimeline } from "@/features/Dashboard/hooks/useTimeline";
import { CardWithContent } from "@/components/ui/CardWithContent";
import { DownArrowIcon } from "@/assets/icons";
import { useToggle } from "@/hooks/useToggle";

export const TimelineSection = () => {
  const { events, isLoading } = useTimeline();
  const { value: isOpen, toggle, setFalse } = useToggle(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedYear, setSelectedYear] = useState("2026");

  // Available years
  const years = ["2024", "2025", "2026", "2027", "2028"];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setFalse();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setFalse]);

  if (isLoading) {
    return (
      <CardWithContent title="Project Timeline">
        <div className="flex items-center justify-center h-64">
          <p className="text-lg text-[#7A8A9A]">Loading...</p>
        </div>
      </CardWithContent>
    );
  }

  const yearDropdown = (
    <div className="relative w-full sm:w-auto" ref={dropdownRef}>
      <button
        onClick={toggle}
        className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 w-full sm:w-auto border border-[#E0E8ED] rounded-lg bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm font-medium text-gray-700">{selectedYear}</span>
        <DownArrowIcon size={12} color="#17181C" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg z-50 border border-[#E0E8ED]">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => {
                setSelectedYear(year);
                setFalse();
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                selectedYear === year
                  ? "bg-gray-50 font-medium text-[#1D3557]"
                  : "text-gray-700"
              } ${year === years[0] ? "rounded-t-lg" : ""} ${
                year === years[years.length - 1] ? "rounded-b-lg" : ""
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <CardWithContent title="Project Timeline" rightContent={yearDropdown}>
      <Timeline events={events} />
    </CardWithContent>
  );
};

