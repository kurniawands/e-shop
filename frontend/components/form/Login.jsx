import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      console.log(Response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
                Masuk Sekarang
              </div>
              <div className="mt-2 text-sm text-center">
                Belum punya akun C-things?{" "}
                <Link href="/auth/register" className="text-custom-4">
                  Daftar
                </Link>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mt-8">
                  <div className="text-xs">Phone Number or Email</div>
                  <div className="h-10 my-1 items-center rounded-lg border">
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-full px-3 rounded-lg"
                    ></input>
                  </div>
                  <div className="text-xs">Password</div>
                  <div className="h-10 my-1 items-center rounded-lg border">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-full px-3 rounded-lg"
                    ></input>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full h-12 my-4 bg-custom-1 font-extrabold text-custom-5 rounded-lg border"
                >
                  Masuk
                </button>
              </form>
              <div className="flex flex-row my-2 justify-between">
                <div className="w-[27%] h-0 my-auto border"></div>
                <div className="text-xs">atau masuk dengan</div>
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
