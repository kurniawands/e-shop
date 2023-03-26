import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Computer", href: "/Computer" },
  { name: "Laptop", href: "/Laptop" },
  { name: "Products", href: "/Products" },
  { name: "Contact Us", href: "/Contact" },
];

export default function Navbar() {
  return (
    <>
      <header className="flex mx-auto bg-[#570709] max-w-7xl justify-between px-5 py-7 text-lg font-medium">
        <div>
          <Link href="/">
            <Image alt="logo" src="/logo.png" width={70} height={70} />
          </Link>
        </div>
        <nav className="my-auto">
          {/* <ul className="justify-center">
            <Link href="/products">
              <ul>Products</ul>
            </Link>
          </ul> */}
          <div className="flex space-x-4">
            {navigation.map((item) => (
              <a key={item.name} href={item.href}>
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <div className="my-auto">
          <Link href="/auth/login">
            <button>Login</button>
          </Link>
        </div>
      </header>
    </>
  );
}
