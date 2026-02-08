type CommentItemProps = {
    author: string;
    message: string;
    date: string;
  };
  
  export const CommentItem = ({
    author,
    message,
    date
  }: CommentItemProps) => {
    const initial = author.charAt(0).toUpperCase();
  
    return (
      <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#E2E8F0] flex items-center justify-center text-sm font-semibold text-[#475569]">
              {initial}
            </div>
  
            <div>
              <p className="text-sm font-bold text-[#1D3557]">
                {author}
              </p>
            </div>
          </div>
  
          {/* Date */}
          <p className="text-sm text-[#8597A8] whitespace-nowrap">
            {date}
          </p>
        </div>
  
        <p className="mt-1.5 text-sm text-[#1D3557] leading-relaxed">
          {message}
        </p>
      </div>
    );
  };
  