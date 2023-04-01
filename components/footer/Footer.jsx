import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [showImage, setShowImage] = useState(true);

  const handleInput = (event) => {
    if (event.target.value) {
      setShowImage(false);
    } else {
      setShowImage(true);
    }
  };

  const contact = [
    { name: "Google", src: "/google.svg" },
    { name: "Facebook", src: "/facebook.svg" },
    { name: "Whatsapp", src: "/whatsapp.svg" },
  ];

  return (
    <>
      <div className="bg-custom-4 bg-opacity-20">
        <div className="max-w-7xl flex flex-col w-full h-[512px] mx-auto py-14 justify-between">
          <div className="flex flex-row h-32 mx-10 px-10 justify-between bg-custom-1 rounded-2xl">
            <div className="my-auto text-custom-3 font-bold text-3xl">
              Subscribe newsletter
            </div>
            <div className="flex flex-row w-[600px] my-auto justify-between">
              <div className="my-auto">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-80 h-16 px-5 font-semibold placeholder:font-semibold placeholder:text-sm placeholder:text-custom-1 bg-custom-3 rounded-2xl"
                    onInput={handleInput}
                  ></input>
                  {showImage && (
                    <Image
                      src="send-email.svg"
                      width={24}
                      height={24}
                      className="absolute top-1/2 left-32 transform -translate-y-1/2 z-10"
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-row">
                <Image src="headphone.svg" width={45} height={45} />
                <div className="my-auto ml-5 font-semibold text-sm text-[#5f5f5f]">
                  Call us 24/7 :<br />
                  (+62) 0123 567 789
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row h-56 mx-12 justify-between">
            <div className="flex flex-col justify-between w-60 h-full">
              <Image src="logo-tulisan.svg" width={200} height={200} />
              <div className="text-custom-4">
                64 st james boulevard
                <br />
                hoswick , ze2 7zj
              </div>
              <div className="flex flex-row h-12 items-end space-x-5 border-t">
                {contact.map((item) => (
                  <Image
                    key={item.name}
                    src={item.src}
                    width={24}
                    height={24}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-row my-auto space-x-40">
              <div className="text-custom-4 text-xl">
                <div className="font-semibold">Find product</div>
                <ul className="list-disc ml-6 my-2 space-y-2">
                  <li>
                    <Link href="/">Brownze arnold</Link>
                  </li>
                  <li>
                    <Link href="/">Chronograph blue</Link>
                  </li>
                  <li>
                    <Link href="/">Smart phones</Link>
                  </li>
                  <li>
                    <Link href="/">Automatic watch</Link>
                  </li>
                  <li>
                    <Link href="/">Hair straighteners</Link>
                  </li>
                </ul>
              </div>
              <div className="text-custom-4 text-xl">
                <div className="font-semibold">Get help</div>
                <ul className="list-disc ml-6 my-2 space-y-2">
                  <li>
                    <Link href="/">About us</Link>
                  </li>
                  <li>
                    <Link href="/">Contact us</Link>
                  </li>
                  <li>
                    <Link href="/">Return policy</Link>
                  </li>
                  <li>
                    <Link href="/">Privacy policy</Link>
                  </li>
                  <li>
                    <Link href="/">Payment policy</Link>
                  </li>
                </ul>
              </div>
              <div className="text-custom-4 text-xl">
                <div className="font-semibold">About us</div>
                <ul className="list-disc ml-6 my-2 space-y-2">
                  <li>
                    <Link href="/">News</Link>
                  </li>
                  <li>
                    <Link href="/">Service</Link>
                  </li>
                  <li>
                    <Link href="/">Our policy</Link>
                  </li>
                  <li>
                    <Link href="/">Customer care</Link>
                  </li>
                  <li>
                    <Link href="/">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
