import Image from "next/image";
import products from "../../data/proddata.json";

export default function ListProducts() {
  return (
    <div className="max-w-7xl mx-auto my-20 ">
      <h1 className="w-fit mx-auto mb-10 text-[40px] font-bold border-b border-white">
        LIST ALL PRODUCTS
      </h1>
      <div className="grid grid-cols-4 justify-between bg-gray-800 mx-10 my-5">
        {products.map((item) => (
          <div key={item.ID} className="text-center my-10 bg-gray-600 mx-10">
            <Image
              className="mx-auto my-4"
              src={item.Path}
              width={200}
              height={200}
            />
            <p className="w-32 mx-auto my-5 text-sm bg-red-900 font-medium p-2 mt-10">
              {item.Name}
            </p>
            <p>Rp. {item.Price}</p>
            <div className="w-16 h-10 bg-black py-2 mx-auto my-5">Beli</div>
          </div>
        ))}
      </div>
    </div>
  );
}
