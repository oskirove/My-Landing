import { TelescopeIcon } from "@/components/ui/icons/telescope";
import { TerminalIcon } from "@/components/ui/icons/terminal";
import { BookTextIcon } from "@/components/ui/icons/book-text";
import { RocketIcon } from "@/components/ui/icons/rocket";
import { CursorClickIcon } from "@/components/ui/icons/cursor-click";
import { CoffeeIcon } from "@/components/ui/icons/coffee";
import { ConnectIcon } from "@/components/ui/icons/connect";
import SkillCard from "@/components/Landing/SkillCard";
import { RouteIcon } from "../ui/icons/route-icon";

const skills = [
    { title: "Pensamiento estructurado", Icon: RouteIcon },
    { title: "Aprendizaje autodidacta", Icon: CoffeeIcon },
    { title: "Obsesión estética", Icon: CursorClickIcon },
    { title: "Mentalidad de producto", Icon: RocketIcon },
    { title: "Versatilidad técnica", Icon: TerminalIcon },
    { title: "Atención al detalle", Icon: TelescopeIcon },
    { title: "Iteración constante", Icon: BookTextIcon },
    { title: "Colaboración sin ego", Icon: ConnectIcon }
];

export default function SkillGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {skills.map(({ title, Icon }) => (
                <SkillCard title={title} Icon={Icon} />
            ))}
        </div>
    )
}