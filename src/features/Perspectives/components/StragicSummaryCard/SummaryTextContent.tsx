type SummaryTextContentProps = {
    category: string;
    title: string;
    description: string;
    align?: "left" | "center";
  };
  
  export const SummaryTextContent = ({
    category,
    title,
    description,
    align = "left"
  }: SummaryTextContentProps) => {
    const alignment =
      align === "center" ? "text-center" : "text-left";
  
    return (
      <div className={`flex-1 ${alignment}`}>
        {/* Badge */}
        <div className="mb-2">
          <span className="
            inline-block
            px-2.5 py-1
            text-xs
            border border-[#E0E8ED]
            bg-white
            text-[#8597A8]
            rounded-full
          ">
            {category}
          </span>
        </div>
  
        {/* Title */}
        <h3 className="
          text-base
          font-bold
          text-[#1D3557]
        ">
          {title}
        </h3>
  
        {/* Description */}
        <p className="
          text-sm
          text-[#8597A8]
          mt-0.5
        ">
          {description}
        </p>
      </div>
    );
  };
  