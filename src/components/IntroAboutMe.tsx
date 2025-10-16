"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

function IntroAboutMe() {
    const divRefIntro = useRef<HTMLDivElement | null>(null);
    const textRefH2 = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        if (!textRefH2.current || !divRefIntro.current) return;

        gsap.registerPlugin(ScrollTrigger, SplitText);

        const split = new SplitText(textRefH2.current, { type: "words" });

        gsap.from(split.words, {
            autoAlpha: 0,
            y: 60,
            filter: "blur(10px)",
            stagger: 0.2,
            scrollTrigger: {
                trigger: divRefIntro.current,
                start: "center center",
                end: "+=1500",
                scrub: 1.5,
                pin: true,
                anticipatePin: 1,
            },
        });

        return () => {
            split.revert();
        };
    }, []);

    return (
        <div
            ref={divRefIntro}
            className="h-100vh flex items-center justify-center bg-transparent mb-18"
        >
            <h2
                ref={textRefH2}
                className="text-6xl font-bold max-w-5xl text-start leading-tight"
            >
                Hola, soy Óscar y podría decirte que soy “un desarrollador fullstack
                apasionado por la tecnología”
            </h2>
        </div>
    );
}

export default IntroAboutMe;