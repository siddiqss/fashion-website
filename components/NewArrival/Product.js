import Image from 'next/image';

function Product({ img, title = "" }) {
  return (
    <div
    //   initial={{ filter: "grayscale(100%)" }}
    //   whileInView={{ filter: "grayscale(0%)" }}
    //   transition={{ duration: 0.5 }}
    //   viewport={{ once: false, amount: "all" }}
      className="flex flex-col items-center justify-center"
      style={{
        margin: "5rem 0",
      }}
    >
      <Image
      width={200}
      height={200}
        className="w-full h-auto z-10 cursor-pointer"
        src={img.src}
        alt={title}
      />
      <h2 className="font-medium text-center text-2xl cursor-pointer text-primary">
        {title}
      </h2>
    </div>
  );
}

export default Product;
