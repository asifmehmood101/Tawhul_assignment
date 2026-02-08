import { useState } from "react";

type TabItem = {
  value: string;
  label: string;
  content: React.ReactNode;
};

type TabProps = {
  tabs: TabItem[];
  defaultValue?: string;
};

export const Tab = ({
  tabs,
  defaultValue
}: TabProps) => {
  const [active, setActive] = useState(
    defaultValue || tabs[0]?.value
  );

  return (
    <div>
      {/* Tab Header */}
      <div className="inline-flex bg-[#E0E8ED80] rounded-xl p-1 gap-1">
        {tabs.map((tab) => {
          const isActive = active === tab.value;

          return (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              className={`
                px-4 py-2 text-sm rounded-lg transition-all bg-[#F1F5F9]
                ${
                  isActive
                    ? "bg-white shadow-sm text-[#1E293B]"
                    : "bg-transparent text-[#64748B]"
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {tabs.find((t) => t.value === active)?.content}
      </div>
    </div>
  );
};
