import { Card } from "@/components/ui/Card";

type ProfileHighlightCardProps = {
  name: string;
  subtitle: string;
  avatarUrl: string;
  className?: string;
};

export const ProfileHighlightCard = ({
  name,
  subtitle,
  avatarUrl,
  className = ""
}: ProfileHighlightCardProps) => {
  return (
    <Card
      className={`bg-[#F5F8FA]! border-0 py-2 px-3 flex items-center gap-3 ${className}`}
    >    
    {/* Avatar */}
        <img
          src={avatarUrl}
          alt={name}
          className="w-11.5 h-11.5 rounded-full object-cover"
        />

        {/* Text */}
        <div className="text-base font-semibold">
          <h3 className="text-[#1E293B]">
            {name}
          </h3>

          <p className="text-[#64748B] mt-0.5">
            {subtitle}
          </p>
        </div>
    </Card>
  );
};
