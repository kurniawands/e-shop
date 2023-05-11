import Image from "next/image";

const benefit = [
  {
    name: "Free delivery",
    desc: "on order above Rp.1.000.000,00",
    img: "/box-tick.svg",
  },
  {
    name: "Best quality",
    desc: "best quality in low price",
    img: "/crown.svg",
  },
  {
    name: "1 year warranty",
    desc: "Available warranty",
    img: "/shield-security.svg",
  },
];

export default function Benefit() {
  return (
    <>
      <div className="max-w-7xl h-36 mx-auto my-10 flex flex-row justify-evenly bg-[#e2f4ff] text-custom-4 rounded-2xl">
        {benefit.map((item) => (
          <div key={item.name} className="flex flex-row space-x-8">
            <Image src={item.img} width={64} height={64} />
            <div className="my-auto">
              <div className="font-semibold text-xl">{item.name}</div>
              <div>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
