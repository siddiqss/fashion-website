"use client";
import gsap from "gsap";
import Title from "./Title";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Product from "./Product";
import img1 from "@/public/Images/1.webp";
import img2 from "@/public/Images/2.webp";
import img3 from "@/public/Images/3.webp";
import img4 from "@/public/Images/4.webp";
import img5 from "@/public/Images/5.webp";
import img6 from "@/public/Images/6.webp";
import img7 from "@/public/Images/7.webp";
import img8 from "@/public/Images/8.webp";
import img9 from "@/public/Images/9.webp";
import img10 from "@/public/Images/10.webp";


function Shop() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      ref.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: horizontalRef.current,
          start: "top top",
          end: "2000 top",
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
      className="w-full min-h-screen height-auto overflow-hidden flex justify-start items-start relative"
      style={{ margin: "0 auto" }}
      ref={horizontalRef}
      id="shop"
    >
      <Title />
      <div className="w-full md:w-[35%] bg-body text-text min-h-screen z-10 fixed left-0 flex items-center justify-center">
        <p className="text-lg font-light w-[80%]" style={{ margin: "0 auto" }}>
          Dive into the allure of our latest collection at Chicity. Discover a
          symphony of chic designs and avant-garde details that redefine
          contemporary style. From the runway to your wardrobe, each piece is a
          statement, a brushstroke of sophistication that captures the spirit of
          the modern fashionista. Elevate your look with Chicity's new
          collection—a fusion of bold expression and timeless allure.
        </p>
      </div>
      <div
        ref={ref}
        className="relative md:left-[35%] z-10 top-0 min-h-screen w-[400vw] bg-grey flex justify-start items-center pl-0 md:pl-[30%] font-semibold"
      >
        <Product title={"Man Basics"} img={img1} />
        <Product title={"Tops"} img={img2} />
        <Product title={"Sweatshirts"} img={img3} />
        <Product title={"Ethnic wear"} img={img4} />
        <Product title={"Blazers"} img={img5} />
        <Product title={"Suits"} img={img6} />
        <Product title={"Antiques"} img={img7} />
        <Product title={"Jewellery"} img={img8} />
        <Product title={"Watches"} img={img9} />
        <Product title={"Special Edition"} img={img10} />

      </div>
    </section>
  );
}

export default Shop;
