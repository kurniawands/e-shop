import Box from "./Box";
import Image from "next/image";

const top = [
  { name: "Computer", price: "10000", img: "/favicon.ico" },
  { name: "Laptop", price: "10000", img: "/favicon.ico" },
  { name: "Tablet", price: "10000", img: "/favicon.ico" },
];

const products = [
  { name: "Speakers", price: "10000", img: "/favicon.ico" },
  { name: "Internet", price: "10000", img: "/favicon.ico" },
  { name: "Hardisk", price: "10000", img: "/favicon.ico" },
  { name: "RAM", price: "10000", img: "/favicon.ico" },
  { name: "Battery", price: "10000", img: "/favicon.ico" },
  // { name: "Drive", price: "10000", img: "/favicon.ico" },
];

export default function TopRated() {
  return (
    <div className="max-w-7xl mx-auto my-20 ">
      <h1 className="w-fit mx-auto mb-10 text-[40px] font-bold border-b border-white">
        TOP RATED PRODUCTS
      </h1>
      <div className="flex flex-col bg-gray-800 mx-10 mb-5">
        {top.map((item) => (
          <div
            key={item.name}
            className="relative inline-block bg-gray-600 border"
          >
            <Image
              className="block w-1/2 mx-auto h-auto object-cover object-center border"
              src={item.img}
              width={300}
              height={300}
            />

            <div className="absolute top-0 bottom-0 left-0 right-0 bg-red-900 p-[10px] transition-all duration-300 ease-in-out opacity-0 hover:opacity-80 border">
              <p className="w-fit mx-auto mt-44 mb-10 text-7xl font-medium p-2 border">
                {item.name}
              </p>
              <p className="w-fit mx-auto mt-10 mb-20 text-5xl border">
                Rp. {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 justify-between bg-gray-800 mx-10 my-5">
        {products.map((item) => (
          <div key={item.name} className="text-center my-10 bg-gray-600 mx-10">
            <Image
              className="mx-auto my-4"
              src={item.img}
              width={100}
              height={100}
            />
            <p className="w-32 mx-auto my-5 text-xl bg-red-900 font-medium p-2 mt-10">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
