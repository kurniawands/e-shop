import Image from "next/image";

export default function Box({ items }) {
  return (
    <div className="flex flex-row flex-wrap justify-between space-x-10">
      {items.map((item) => (
        <div className="mb-14">
          <div className="text-center mb-7">
            <Image
              className="mx-auto"
              src={item.img}
              width={150}
              height={150}
            />
            <p className="w-52 text-xl bg-red-900 font-medium p-2 mt-10">
              {item.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
