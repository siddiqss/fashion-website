'use client'
import {motion} from "framer-motion";
import Image from "next/image";



function Product({img, title=""}) {
  return (
    <motion.div
    initial={{filter: 'grayscale(100%)'}}
    whileInView={{filter: 'grayscale(0%)'}}
    transition={{duration: 0.5}}
    viewport={{once: false, amount: 'all'}}
    className="inline-block w-96 md:w-80 md:mr-24 mr-2">
        <Image width={100} height={100} className="w-full h-auto cursor-pointer" src={img.src} alt={title} />
        <h1 className="font-medium text-center text-2xl cursor-pointer text-primary">{title}</h1>
    </motion.div>
  )
}

export default Product