import Box from "./Box";
import Image from "next/image";

const top = [
  {
    ID: "ykl174002",
    Name: "Logitech G304 Mouse",
    Price: 300000,
    Stock: 72,
    Rating: "3,93",
    Path: "/product/Logitech G304 Mouse.jpg",
  },
  {
    ID: "bcc323798",
    Name: "Logitech G Pro Wireless",
    Price: 1000000,
    Stock: 21,
    Rating: "4,25",
    Path: "/product/logitech gpro wireless.jpg",
  },
  {
    ID: "kvp181516",
    Name: "MSI B760 TOMAHAWK",
    Price: 4350000,
    Stock: 94,
    Rating: "3,16",
    Path: "/product/MSI B760 TOMAHAWK.jpg",
  },
];

const products = [
  {
    ID: "ngh442639",
    Name: "MSI Geforce RTX 4090 Gaming 24GB",
    Price: 31400000,
    Stock: 29,
    Rating: "3,73",
    Path: "/product/MSI Geforce RTX 4090 Gaming 24GB.jpg",
  },
  {
    ID: "xyy251535",
    Name: "Samsung SSD 870 EVO 2TB",
    Price: 2750000,
    Stock: 63,
    Rating: "4,24",
    Path: "/product/Samsung SSD 870 EVO 2TB.jpg",
  },
  {
    ID: "jzn225628",
    Name: "Samsung SSD 980 PRO 1TB ",
    Price: 1800000,
    Stock: 100,
    Rating: "4,97",
    Path: "/product/Samsung SSD 980 PRO 1TB.jpg",
  },
  {
    ID: "ldc031278",
    Name: "Samsung Oddysey Neo G8",
    Price: 18000000,
    Stock: 49,
    Rating: "2,25",
    Path: "/product/Samsung Oddysey Neo G8.jpg",
  },
  {
    ID: "myp283494",
    Name: "Intel Core I9 13900KS",
    Price: 13500000,
    Stock: 59,
    Rating: "2,12",
    Path: "/product/Intel Core I9 13900KS.jpg",
  },
];

export default function TopRated() {
  return (
    <div className="max-w-7xl mx-auto my-20 ">
      <h1 className="w-fit mx-auto mb-10 text-[40px] font-bold border-b border-white">
        TOP RATED PRODUCTS
      </h1>
      <div className="flex flex-col bg-gray-800 mx-10 mb-5">
        {top.map((item) => (
          <div key={item.ID} className="relative my-5 inline-block bg-gray-600">
            <Image
              className="block w-1/2 mx-auto h-auto object-cover object-center"
              src={item.Path}
              width={300}
              height={300}
            />

            <div className="absolute top-0 bottom-0 left-0 right-0 p-[10px] transition-all duration-300 ease-in-out opacity-0 hover:opacity-80">
              <p className="w-fit ml-3 mt-44 mb-10 text-7xl bg-black opacity-50 font-medium p-2">
                {item.Name}
              </p>
              <p className="w-fit ml-3 mx-auto mt-10 mb-20 bg-black opacity-50 text-5xl">
                Rp. {item.Price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 justify-between bg-gray-800 mx-10 my-5">
        {products.map((item) => (
          <div key={item.ID} className="text-center my-10 bg-gray-600 mx-10">
            <Image
              className="mx-auto my-4"
              src={item.Path}
              width={150}
              height={150}
            />
            <p className="w-32 mx-auto my-5 text-sm bg-red-900 font-medium p-2 mt-10">
              {item.Name}
            </p>
            <p className="mb-5">Rp. {item.Price}</p>
            <div className="w-16 h-10 bg-black py-2 mx-auto my-5">Beli</div>
          </div>
        ))}
      </div>
    </div>
  );
}
