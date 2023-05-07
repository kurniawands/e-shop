import Head from "next/head";
import { Inter } from "next/font/google";
import Top from "@/components/header/Top";
import Header from "@/components/header/Header";
import Navbar from "@/components/header/Navbar";
import Banner from "@/components/banner/Banner";
import Popular from "@/components/products/Popular";
import BannerSale from "@/components/banner/BannerSale";
import Benefit from "@/components/other/Benefit";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Top />
        <Header />
        <Navbar />
        <Banner />
        <Popular />
        <BannerSale />
        <Benefit />
        <Footer />
      </main>
    </>
  );
}