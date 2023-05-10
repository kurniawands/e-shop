import Image from "next/image";
import Link from "next/link";
import SearchBar from "../search/SearchBar";

const user = [
  { name: "Sign in", src: "/profile.svg", href: "/auth/login" },
  { name: "Favorite", src: "/favorite.svg", href: "/" },
  { name: "Cart", src: "/cart.svg", href: "/" },
];

export default function Header() {
  return (
    <>
      <div className="flex flex-row max-w-7xl mx-auto my-6 justify-between">
        <div className="flex flex-row max-w-[640px]">
          <Link href="/">
            <Image src="/logo-tulisan.svg" width={200} height={200} />
          </Link>
          <SearchBar />
        </div>
        <div className="flex flex-row my-auto space-x-8">
          {user.map((item) => (
            <div key={item.name} className="flex flex-row">
              <Image src={item.src} width={24} height={24} />
              <Link href={item.href} className="ml-3">
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
