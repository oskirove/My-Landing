"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

function AboutMe2() {
    const divRefeIntro = useRef<HTMLDivElement | null>(null);
    const textRefeH2 = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        if (!textRefeH2.current || !divRefeIntro.current) return;

        gsap.registerPlugin(ScrollTrigger, SplitText);

        const ctx = gsap.context(() => {
            
            const split = new SplitText(textRefeH2.current, { type: "words" });
            
            gsap.from(split.words, {
                autoAlpha: 0,
                y: 60,
                filter: "blur(10px)",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: divRefeIntro.current,
                    start: "center center",
                    end: "+=1500",
                    scrub: 1.5,
                    pin: true,
                    anticipatePin: 1,
                },
            });

        }, textRefeH2)

        return () => ctx.revert()
    }, []);

    return (
        <div
            ref={divRefeIntro}
            className="h-100vh flex items-center justify-center bg-transparent mb-18"
        >
            <h2
                ref={textRefeH2}
                className="text-6xl font-bold max-w-5xl text-start leading-tight"
            >
                La realidad es más simple; me gusta crear cosas, entender cómo funcionan y, 
                sobre todo, romperlas para aprender a hacerlas mejor.
            </h2>
        </div>
    );
}

export default AboutMe2;