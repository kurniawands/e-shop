import Image from "next/image";

export default function Box({ items }) {
  return (
    <div className="grid grid-cols-3 justify-between">
      {items.map((item) => (
        <div className="mb-14">
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
        </div>
      ))}
    </div>
  );
}
