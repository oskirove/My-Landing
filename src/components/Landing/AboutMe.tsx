"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default function AboutMe() {
    const divRefAbout = useRef<HTMLDivElement | null>(null);
    const textRefHorizontal = useRef<HTMLHeadingElement | null>(null);
    const spanRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger, SplitText);

        if (!divRefAbout.current || !textRefHorizontal.current || !spanRef.current) return;

        const ctx = gsap.context(() => {
            
            const splitSpan = new SplitText(spanRef.current, { type: "chars" });
            const split = new SplitText(textRefHorizontal.current, { type: "words" });

            const totalWidth = textRefHorizontal.current!.scrollWidth;
            
            gsap.to(textRefHorizontal.current, {

                x: () => `-${totalWidth - window.innerWidth}`, 
                ease: "none",
                scrollTrigger: {
                    trigger: divRefAbout.current,
                    start: "center center",
                    end: () => `+=${totalWidth}`,
                    scrub: 1.2,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            gsap.from(split.words, {
                alpha: 0,
                y: 30,
                stagger: 0.15,
                duration: 0.4,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: divRefAbout.current,
                    start: "center center",
                    end: () => `+=${totalWidth}`,
                    scrub: 0.5,
                },
            });

            gsap.from(splitSpan.chars, {
                y: 40,
                filter: "blur(10px)",
                alpha: 0,
                stagger: 0.05,
                duration: 0.3,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: divRefAbout.current,
                    start: "center center",
                    end: () => `+=${totalWidth}`,
                    scrub: 0.5,
                },
            });

        }, textRefHorizontal);

        return () => ctx.revert();
        
    }, []);

    return (
        <div
            ref={divRefAbout}
            className="relative flex items-center justify-start overflow-hidden w-screen bg-primary py-20 shadow-primary/25 shadow-xl dark:shadow-[#161514]/70"
        >
            <h2
                ref={textRefHorizontal}
                className="text-[11rem] text-secondary font-bold leading-tight px-20 whitespace-nowrap"
            >
                Pero eso suena a la típica biografía genérica de{" "}
                <span ref={spanRef} className="text-secondary ">
                    LinkedIn
                </span>{" "}
                que nadie termina de leer.
            </h2>
        </div>
    );
}