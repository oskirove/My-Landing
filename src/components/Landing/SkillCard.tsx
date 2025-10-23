"use client";

interface SkillCardProps {
    title: String,
    Icon: React.ElementType
}

export default function SkillCard({ title, Icon }: SkillCardProps) {
    return (
        <div className="flex flex-col items-center space-y-3">
            <Icon size={82} className="text-primary" />
            <h3 className="text-3xl font-semibold">{title}</h3>
        </div>
    )
}
