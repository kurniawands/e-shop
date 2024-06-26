import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-5 border">
        <Link href="/">
          <Image
            src="/c-things.svg"
            width={250}
            height={100}
            className="mx-auto pt-5"
          />
        </Link>
        <div className="flex flex-row my-20">
          <div className="w-1/2 my-auto pl-5 text-center">
            <Image
              src="/logo.png"
              width={300}
              height={500}
              className="mx-auto"
            />
            <h1 className="mt-7 mb-2 text-2xl font-semibold">
              Jual Beli Mudah Hanya di C-things
            </h1>
            <p className="mt-1 text-sm">
              Gabung dan rasakan PLUSS ULTRAAA! di C-things
            </p>
          </div>
          <div className="flex w-1/2 pl-10">
            <div className="w-[400px] mr-3 pt-6 px-10 pb-8 border">
              <div className="font-semibold text-2xl text-center">
                Daftar Sekarang
              </div>
              <div className="mt-2 text-sm text-center">
                Sudah punya akun C-things?{" "}
                <Link href="/auth/login" className="text-custom-4">
                  Masuk
                </Link>
              </div>
              <form>
                <div className="mt-8">
                  <div className="text-xs">Phone Number or Email</div>
                  <div className="h-10 my-1 items-center rounded-lg border">
                    <input
                      type="text"
                      id="phone-email"
                      className="w-full h-full px-3 rounded-lg"
                    ></input>
                  </div>
                  <div className="text-xs">Example: email@cthings.com</div>
                </div>
                <button
                  type="submit"
                  className="w-full h-12 my-4 bg-custom-1 font-extrabold text-custom-5 rounded-lg border"
                >
                  Daftar
                </button>
              </form>
              <div className="flex flex-row my-2 justify-between">
                <div className="w-[27%] h-0 my-auto border"></div>
                <div className="text-xs">atau daftar dengan</div>
                <div className="w-[27%] h-0 my-auto border"></div>
              </div>
              <button className="flex flex-row w-full h-10 my-4 justify-start space-x-5 bg-custom-1 font-extrabold text-custom-5 rounded-lg border">
                <Image
                  src="/google-color.svg"
                  width={17}
                  height={17}
                  className="ml-5 my-auto"
                />
                <p className="my-auto pl-[72px]">Google</p>
              </button>
              <div className="text-xs text-center">
                <p>Dengan mendaftar, saya menyetujui</p>
                <p>
                  <Link href="" className="text-custom-4">
                    Syarat dan Ketentuan
                  </Link>{" "}
                  serta{" "}
                  <Link href="" className="text-custom-4">
                    Kebijakan Privasi
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <p className="w-1/2 px-3 text-right">&copy; 2023</p>
          <p className="w-1/2 px-3 text-custom-4 font-bold border-l border-custom-1">
            C-things care
          </p>
        </div>
      </div>
    </>
  );
}
