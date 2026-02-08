import React from "react";

type CardWithContentProps = {
  title: string;
  children: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
};

export const CardWithContent = ({
  title,
  children,
  rightContent,
  className = ""
}: CardWithContentProps) => {
  return (
    <div className={`bg-white rounded-xl border border-[#E0E8ED] px-4 py-4.5 ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4">
        <h2 className={"text-base font-bold text-[#1D3557]"}>
          {title}
        </h2>

        {rightContent && (
          <div className="w-full sm:w-auto">
            {rightContent}
          </div>
        )}
      </div>

      <div>
        {children}
      </div>

    </div>
  );
};
