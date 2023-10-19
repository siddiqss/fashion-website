"use client";
import Product from "./Product";
import Title from "./Title";
import img1 from "@/public/Images/11.webp";
import img2 from "@/public/Images/12.webp";
import img3 from "@/public/Images/13.webp";
import img4 from "@/public/Images/14.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function NewArrival() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      ref.current,
      {
        y: 0,
      },
      {
        y: "-100%",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: horizontalRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section
      className="min-h-screen w-screen flex items-center justify-center relative "
      style={{
        margin: "0 auto",
      }}
      ref={horizontalRef}
      id="new-arrival"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] md:w-[30vw] h-[90vh] z-20"
        style={{
          boxShadow: "0 0 0 5vw white",
          border: "3px solid #202020",
          //   backgroundColor: "aliceblue",
        }}
      ></div>
      <Title />
      <div
        ref={ref}
        className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-0 w-[55vw] md:w-[25vw] h-auto flex flex-col justify-center items-center"
      >
        <Product img={img1} title="Denim" />
        <Product img={img2} title="Cool Dresses" />
        <Product img={img3} title="Jackets" />
        <Product img={img4} title="T-shirt" />
      </div>
      <div className="hidden md:absolute md:top-0 md:right-0 md:w-[20%] text-lg font-light p-8 z-11 text-primary">
        Discover the allure of Chicity's latest collection—a fusion of bold
        aesthetics and understated elegance. From sleek, tailored essentials to
        statement pieces that command attention, each garment is a testament to
        modern chic. <br />Embrace a palette that mirrors the rich hues of the
        changing seasons, ensuring effortless transitions from day to night. <br />
        Elevate your style effortlessly with our curated selection that speaks
        volumes without saying a word.<br />Welcome to a world where fashion meets
        finesse, courtesy of Chicity's newest collection.
      </div>
    </section>
  );
}

export default NewArrival;
