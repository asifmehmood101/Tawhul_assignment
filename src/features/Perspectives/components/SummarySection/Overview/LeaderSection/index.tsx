import { CardWithContent } from "@/components/ui/CardWithContent";
import { ProfileHighlightCard } from "./ProfileHighlightCard";

type Leader = {
  id: string;
  name: string;
  subtitle: string;
  avatarUrl: string;
};

type LeadersSectionProps = {
  leaders: Leader[];
  className?: string;
};

export const LeadersSection = ({
  leaders,
  className = ""
}: LeadersSectionProps) => {
  return (
    <CardWithContent
      title="Leaders"
      className={className}
    >
      <div
        className="
          flex
    flex-wrap
    gap-4
    items-start
        "
      >
        {leaders.map((leader) => (
          <ProfileHighlightCard
            key={leader.id}
            name={leader.name}
            subtitle={leader.subtitle}
            avatarUrl={leader.avatarUrl}
          />
        ))}
      </div>
    </CardWithContent>
  );
};
