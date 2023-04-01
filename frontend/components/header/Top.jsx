import Image from "next/image";
import Link from "next/link";

export default function Top() {
  return (
    <>
      <div className="flex flex-row max-w-7xl mx-auto py-3 justify-between">
        <div>Need help? Call us: (+98) 0234 456 789</div>
        <div className="flex flex-row">
          <div className="flex flex-row">
            <Image src="/location.svg" width={24} height={24} />
            <Link
              href="https://www.google.com/maps/place/Gedung+Kuliah+S1+FMIPA+UGM/data=!4m6!3m5!1s0x2e7a584ce4597527:0x82c72f370e921b40!8m2!3d-7.7675741!4d110.3766249!16s%2Fg%2F11g6nbvwy8"
              className="pl-5"
            >
              Our Store
            </Link>
          </div>
          <div className="flex flex-row pl-10">
            <Image src="/tracking.svg" width={24} height={24} />
            <Link href="https://jet.co.id/track" className="pl-5">
              Track your order
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
