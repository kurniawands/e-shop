import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Catalog", href: "/catalog" },
  { name: "Blog", href: "/blog" },
  { name: "Pages", href: "/pages" },
  { name: "About us", href: "/about" },
];

export default function Navbar() {
  const [rotate, setRotate] = useState(false);

  const handleRotate = () => {
    setRotate(!rotate);
  };

  return (
    <>
      <div className="flex mx-auto max-w-7xl justify-between text-lg font-medium">
        <div className="flex flex-row w-56 h-16 bg-custom-3">
          <div className="mx-4 my-auto">Browse categories</div>
          <Image
            src="/category-arrow-down.svg"
            width={24}
            height={24}
            className={
              rotate ? "transform rotate-180 duration-500" : "duration-500"
            }
            onClick={handleRotate}
          />
        </div>
        <nav className="my-auto">
          <div className="flex space-x-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.href}>
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <div className="my-auto font-bold text-custom-4">
          30 Days Free Return
        </div>
      </div>
    </>
  );
}
