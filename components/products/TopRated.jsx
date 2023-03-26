import Box from "./Box";

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
      <div className="">
        <Box items={products} />
      </div>
    </div>
  );
}
