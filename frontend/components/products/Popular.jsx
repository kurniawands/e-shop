import Box from "./Box";
import Image from "next/image";
import Link from "next/link";

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

export default function Popular() {
  return (
    <div className="max-w-7xl mx-auto mt-20 mb-10">
      <h1 className="text-center mb-10 text-3xl font-bold">Popular Products</h1>
      <div className="grid grid-cols-4 gap-5 px-10">
        {products.map((item) => (
          <Link key={item.ID} href="/">
            <div className="px-3 py-7 border rounded-xl">
              <div className="flex flex-col h-64">
                <div className="h-40">
                  <Image
                    className="max-h-full mx-auto object-contain"
                    src={item.Path}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="flex flex-col h-full justify-between">
                  <div className="text-lg text-custom-4">{item.Name}</div>
                  <div className="font-semibold text-[#4a4a4a]">
                    Rp. {item.Price}
                  </div>
                  <div className="flex flex-row space-x-2">
                    <Image src="/rating.svg" width={15} height={15} />
                    <Image src="/rating.svg" width={15} height={15} />
                    <Image src="/rating.svg" width={15} height={15} />
                    <Image src="/rating.svg" width={15} height={15} />
                    <Image src="/rating.svg" width={15} height={15} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
