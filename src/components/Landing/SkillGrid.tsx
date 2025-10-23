"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SkillCard from "@/components/Landing/SkillCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { TelescopeIcon } from "@/components/ui/icons/telescope";
import { TerminalIcon } from "@/components/ui/icons/terminal";
import { BookTextIcon } from "@/components/ui/icons/book-text";
import { RocketIcon } from "@/components/ui/icons/rocket";
import { CursorClickIcon } from "@/components/ui/icons/cursor-click";
import { CoffeeIcon } from "@/components/ui/icons/coffee";
import { ConnectIcon } from "@/components/ui/icons/connect";
import { RouteIcon } from "@/components/ui/icons/route-icon";


const skills = [
    { title: "Pensamiento estructurado", Icon: RouteIcon },
    { title: "Aprendizaje autodidacta", Icon: CoffeeIcon },
    { title: "Obsesión estética", Icon: CursorClickIcon },
    { title: "Mentalidad de producto", Icon: RocketIcon },
    { title: "Versatilidad técnica", Icon: TerminalIcon },
    { title: "Atención al detalle", Icon: TelescopeIcon },
    { title: "Iteración constante", Icon: BookTextIcon },
    { title: "Colaboración sin ego", Icon: ConnectIcon },
];

export default function SkillGridSection() {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        gsap.registerPlugin(ScrollTrigger);
        
        const ctx = gsap.context(() => {
            gsap.from(".skill-card", {
                y: 20,
                autoAlpha: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="max-w-5xl mx-auto mb-24 px-8">
            <h2 className="text-6xl font-bold max-w-5xl text-center leading-tight mb-12">
                Estas son{" "}
                <mark className="bg-transparent text-primary shadow-[inset_0_-0.5em_0_0_rgb(174,181,181)]">
                    mis skills
                </mark>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {skills.map(({ title, Icon }) => (
                    <SkillCard key={title} title={title} Icon={Icon} />
                ))}
            </div>
        </section>
    );
}