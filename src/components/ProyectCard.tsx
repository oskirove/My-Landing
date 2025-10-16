import gsap from "gsap"
import { useEffect, useRef } from "react";

interface ProyectCardProps {
    title: string;
    description: string;
    img: string;
}

export default function ProyectCard({ title, description, img }: ProyectCardProps) {
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
                <h3 className="font-bold text-2xl text-[#e6ddd0] ">{title}</h3>
                <p className="font-medium text-[#FEF7EE]/70">{description}</p>
            </div>
        </article>
    )
}
