import { Check, LucideIcon } from "lucide-react";
import { Card } from "../ui/Card";

export interface Milestone {
  period: string;
  title: string;
  description: string;
  achievements?: string[];
  listTitle?: string;
  quote?: string;
}

interface MilestoneCardProps {
  milestone: Milestone;
  icon: LucideIcon;
}

export function MilestoneCard({ milestone, icon: Icon }: MilestoneCardProps) {
  return (
    <div className="relative group">
      {/* Outer Node Circle on Timeline */}
      <div className="absolute -left-[23px] sm:-left-[31px] top-6 w-6 h-6 rounded-full bg-background border-2 border-border group-hover:border-accent transition-colors duration-300 flex items-center justify-center z-10">
        <div className="w-2 h-2 rounded-full bg-muted-foreground group-hover:bg-accent transition-colors duration-300" />
      </div>

      {/* Milestone Content Card */}
      <Card className="p-6 sm:p-8 flex flex-col gap-4 border-border/70 hover:border-accent/50 transition-all duration-300">
        {/* Card Header */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="px-3 py-1 rounded-md bg-accent/10 border border-accent/20 text-xs font-mono font-semibold text-accent uppercase tracking-wider">
            {milestone.period}
          </span>
          <Icon className="w-5 h-5 text-muted-foreground/60 group-hover:text-accent transition-colors duration-300" />
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold font-sans text-foreground tracking-tight uppercase">
            {milestone.title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {milestone.description}
          </p>
        </div>

        {/* Achievements List */}
        {milestone.achievements && milestone.achievements.length > 0 && (
          <div className="pt-3 border-t border-border/40 space-y-3">
            {milestone.listTitle && (
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/80 font-bold">
                {milestone.listTitle}
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {milestone.achievements.map((item, itemIdx) => (
                <div key={itemIdx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-foreground/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Quote */}
        {milestone.quote && (
          <p className="italic text-xs font-mono text-accent/80 pt-2">
            {`"${milestone.quote}"`}
          </p>
        )}
      </Card>
    </div>
  );
}