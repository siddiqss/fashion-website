'use client';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";


function Images() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const horizontalRef = useRef(null);

    useLayoutEffect(()=>{

        let element = ref.current;
        let scrollingElement = horizontalRef.current;

        let pinWrapWidth = scrollingElement.offsetWidth;
        let t1 = gsap.timeline();

        setTimeout(() => {
            t1.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top top',
                    end: pinWrapWidth,
                    scrub: true,
                    pin: true,
                    markers: true
                },
                height: `${scrollingElement.scrollWidth}px`,
                ease: "none"
            })
            
        }, 1000);

    }, [])


  return (
    <div ref={horizontalRef} className="absolute left-[35%] top-0 min-h-screen bg-grey w-[65%] flex justify-start items-center pl-[30%] font-semibold">
    <h1 className="w-20" style={{ margin: "0 2rem" }}>img</h1>
    <h1 className="w-20" style={{ margin: "0 2rem" }}>img</h1>
    <h1 className="w-20" style={{ margin: "0 2rem" }}>img</h1>
    <h1 className="w-20" style={{ margin: "0 2rem" }}>img</h1>
    <h1 className="w-20" style={{ margin: "0 2rem" }}>img</h1>
    <h1 className="w-20" style={{ margin: "0 2rem" }}>img</h1>
    <h1 className="w-20" style={{ margin: "0 2rem" }}>img</h1>
    <h1 className="w-20" style={{ margin: "0 2rem" }}>img</h1>
    <h1 className="w-20" style={{ margin: "0 2rem" }}>img</h1>
    <h1 className="w-20" style={{ margin: "0 2rem" }}>img</h1>
  </div>
  )
}

export default Images