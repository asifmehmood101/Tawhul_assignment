import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({children,className = "" }: CardProps) => {
  return (
    <div className={`bg-white rounded-xl border border-[#E0E8ED] p-4 ${className}`}>
        {children}
    </div>
  );
};
