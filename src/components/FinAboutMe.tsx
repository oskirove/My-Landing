"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

function FinAboutMe() {
    const divRef = useRef<HTMLDivElement | null>(null);
    const textReference = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        if (!textReference.current || !divRef.current) return;

        gsap.registerPlugin(ScrollTrigger, SplitText);


        const ctx = gsap.context(() => {

            const split = new SplitText(textReference.current, { type: "chars" });

            gsap.from(split.chars, {
                autoAlpha: 0,
                scale: 1.5,
                filter: "blur(10px)",
                stagger: 0.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: divRef.current,
                    start: "center center",
                    end: "+=1500",
                    scrub: 1.5,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            // gsap.to(textReference.current, {
            //     scale: 3,
            //     autoAlpha: 0,
            //     scrollTrigger: {
            //         trigger: divRef.current,
            //         start: "center center",
            //         end: "+=1500",
            //         scrub: 1.5,
            //         pin: true,
            //         anticipatePin: 1,
            //     }
            // })

        }, divRef)

        return () => ctx.revert()

    }, []);

    return (
        <div
            ref={divRef}
            className="h-80 flex items-center justify-center bg-transparent"
        >
            <h2
                ref={textReference}
                className="text-[6rem] font-bold max-w-7xl text-center leading-tight"
            >
                Bueno... vayamos al grano.
            </h2>
        </div>
    );
}

export default FinAboutMe;