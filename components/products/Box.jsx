import Image from "next/image";
import Link from "next/link";

export default function Box({ items }) {
  return (
    <div className="grid grid-cols-3 gap-5">
      {items.map((item) => (
        <Link key={item.prodid} href="/">
          <div className="px-3 py-7 border rounded-xl">
            <div className="flex flex-col h-64">
              <div className="h-40">
                <Image
                  className="max-h-full mx-auto object-contain"
                  src={item.prodimgpath}
                  width={300}
                  height={300}
                />
              </div>
              <div className="flex flex-col h-full justify-between">
                <div className="text-lg text-custom-4">{item.prodname}</div>
                <div className="font-semibold text-[#4a4a4a]">
                  Rp. {item.prodprice}
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
  );
}
