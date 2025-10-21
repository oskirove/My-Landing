"use client"

import { useEffect, useRef } from "react"
import ProyectCard from "./ProyectCard"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import bgImage from "@/assets/img.png";
import { AstroIconDark } from "../ui/svgs/astroIconDark"
import { ReactDark } from "../ui/svgs/reactDark"
import { Tailwindcss } from "../ui/svgs/tailwindcss"
import { Supabase } from "../ui/svgs/supabase"
import { ClerkIconDark } from "../ui/svgs/clerkIconDark"
import { ShadcnUiDark } from "../ui/svgs/shadcnUiDark"
import { GsapLogoDark } from "../ui/svgs/gsapLogoDark"
import { NextjsIconDark } from "../ui/svgs/nextjsIconDark"
import { Typescript } from "../ui/svgs/typescript"

const proyects = [
    {
        title: "Musemy - Saas",
        link: "https://www.musemy.com/",
        description: "Una herramienta simple y estética para artistas que reúne sus enlaces, música y eventos, combinando diseño, funcionalidad y propósito.",
        img: "src/assets/musemy.png",
        techs: [NextjsIconDark, ReactDark, Typescript, ClerkIconDark, Supabase, Tailwindcss, ShadcnUiDark]

    },
    {
        title: "Mi landing - portfolio",
        link: "#",
        description: "Mi portfolio personal, donde muestro mis proyectos, estilo y enfoque como desarrollador fullstack con animaciones y diseño cuidando cada detalle.",
        img: "src/assets/portfolio.png",
        techs: [AstroIconDark, ReactDark, Typescript, Tailwindcss, ShadcnUiDark, GsapLogoDark]
    }
]

export default function ProyectsContainer() {
    const sectionRefe = useRef<HTMLDivElement | null>(null)
    const imageRef = useRef<HTMLDivElement | null>(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        if (!sectionRefe.current || !imageRef.current) return

        const ctx = gsap.context(() => {
            gsap.from(imageRef.current, {
                y: 50,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRefe.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });
        }, sectionRefe)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={sectionRefe} className="max-w-7xl mx-auto space-y-4 px-6">
            <h2
                className="text-6xl font-bold max-w-5xl text-start leading-tight"
            >
                Proyectos{" "}
                <mark className="bg-transparent text-primary shadow-[inset_0_-0.5em_0_0_rgb(174,181,181)]">
                    destacados
                </mark>
            </h2>
            <div
                className="relative overflow-hidden bg-primary/60 rounded-[2rem] shadow-primary/25 dark:shadow-[#161514]/50 shadow-xl gap-6 p-6 h-auto sm:p-10 md:p-16 md:h-[600px]"
            >
                <div
                    ref={imageRef}
                    style={{
                        backgroundImage: `url(${bgImage.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: '130%',
                        width: '110%',
                        top: '-15%',
                        marginLeft: '-10%'
                    }}
                    className="absolute z-0 pointer-events-none"
                />

                <div className="relative z-10 grid items-center justify-between md:grid-cols-2 gap-6">
                    {proyects.map((proyect, index) => (
                        <ProyectCard
                            key={index}
                            title={proyect.title}
                            link={proyect.link}
                            description={proyect.description}
                            img={proyect.img}
                            techs={proyect.techs}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}