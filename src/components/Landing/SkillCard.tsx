"use client";

interface SkillCardProps {
  title: string;
  Icon: React.ElementType;
}

export default function SkillCard({ title, Icon }: SkillCardProps) {
  return (
    <div className="skill-card flex flex-col items-center space-y-3">
      <Icon size={82} className="text-primary transition-transform duration-300 hover:scale-110" />
      <h3 className="text-3xl font-semibold">{title}</h3>
    </div>
  );
}