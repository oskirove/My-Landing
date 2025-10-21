import gsap from "gsap"
import { useEffect, useRef } from "react";
import { LinkIcon } from "../icons/link";
import { LinkPreview } from "../ui/link-preview";

interface ProyectCardProps {
    title: string;
    link: string;
    description: string;
    img: string;
    techs?: React.ElementType[];
}

export default function ProyectCard({ title, link, description, img, techs = [] }: ProyectCardProps) {
    const articleRef = useRef<HTMLElement | null>(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.to(articleRef.current, {
                y: 40,
                ease: "none",
                scrollTrigger: {
                    trigger: articleRef.current,
                    start: "center bottom",
                    end: "bottom top",
                    scrub: true,
                }
            })

        }, articleRef)

        return () => ctx.revert()

    }, [])

    return (
        <article ref={articleRef} className="flex flex-col max-w-lg h-full p-8 bg-[#282524]/60 rounded-4xl backdrop-blur-2xl shadow-[#282524]/40 shadow-xl space-y-4">
            <div className="w-full h-58 ">
                <img src={img} alt={`Imagen del proyecto: ${title}`} className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="space-y-2">
                <LinkPreview url={link} className="flex items-center gap-2 text-[#e6ddd0] hover:text-[#e6ddd0]/70 transition-colors ease-in-out duration-300">
                    <h3 className="font-bold text-2xl">{title}</h3> {/* <LinkIcon size={18} /> */}
                </LinkPreview>
                <p className="font-medium text-[#FEF7EE]/70">{description}</p>
            </div>
            <div className="flex items-center gap-4 pt-2">
                {techs.map((TechIcon, i) => (
                    <TechIcon key={i} className="w-6 h-6" />
                ))}
            </div>
        </article>
    )
}
