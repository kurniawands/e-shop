import Image from "next/image";

export default function BannerSale() {
  return (
    <>
      <div className="max-w-7xl mx-auto my-20">
        <div className="relative">
          <Image
            src="/foot-banner.png"
            alt="Sale"
            width={1200}
            height={400}
            className="mx-auto"
          />
          <div className="absolute top-[20%] right-[20%] w-32 h-10 py-1.5 bg-custom-4 font-medium text-center text-custom-5 rounded-3xl">
            New laptop
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-[12%] text-center space-y-3">
            <div className="font-bold text-custom-3 text-4xl">
              Sale up to 50% off
            </div>
            <div className="text-custom-5">12 inch hd display</div>
          </div>
          <div className="absolute bottom-[20%] right-[20%] w-32 h-10 py-1.5 bg-custom-4 font-medium text-center text-custom-5 rounded-3xl">
            Shop now
          </div>
        </div>
      </div>
    </>
  );
}
