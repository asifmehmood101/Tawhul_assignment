import type { PerspectiveLeader } from "@/@types/types";

type LeaderRowProps = {
    leader: PerspectiveLeader;
    showDivider?: boolean;
};
  
  export const LeaderRow = ({ leader, showDivider = false }: LeaderRowProps) => {
    return (
      <>
        <div className="flex items-center justify-between py-4.25 text-base">
          <div className="flex items-center gap-2.5">
            <img
              src={leader.avatarUrl}
              alt={leader.name}
              className="w-12 h-12 rounded-full object-cover"
            />
  
            <div>
              <p className="text-[#1D3557] font-semibold">
                {leader.name}
              </p>
              <p className="text-[#6C7A89]">
                {leader.perspective}
              </p>
            </div>
          </div>
  
          <p className="text-[#1D3557] font-bold">
            {leader.score}%
          </p>
        </div>
  
        {showDivider && (
          <div className="border-t border-[#E0E8ED]" />
        )}
      </>
    );
  };
  