import Box from "./Box";
import Image from "next/image";

const products = [
  { name: "Computer", price: "10000", img: "/favicon.ico" },
  { name: "Laptop", price: "10000", img: "/favicon.ico" },
  { name: "Tablet", price: "10000", img: "/favicon.ico" },
  { name: "Speakers", price: "10000", img: "/favicon.ico" },
  { name: "Internet", price: "10000", img: "/favicon.ico" },
  { name: "Hardisk", price: "10000", img: "/favicon.ico" },
  { name: "RAM", price: "10000", img: "/favicon.ico" },
  { name: "Battery", price: "10000", img: "/favicon.ico" },
  { name: "Drive", price: "10000", img: "/favicon.ico" },
];

export default function TopRated() {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="w-fit mx-auto mb-14 text-[40px] font-bold border-b border-white">
        TOP RATED PRODUCTS
      </h1>
      <div className="grid grid-cols-3 justify-between">
        {products.map((item) => (
          <div key={item.name} className="text-center mb-7">
            <Image
              className="mx-auto"
              src={item.img}
              width={150}
              height={150}
            />
            <p className="w-52 mx-auto text-xl bg-red-900 font-medium p-2 mt-10">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
