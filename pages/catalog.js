import Head from "next/head";
import Top from "@/components/header/Top";
import Header from "@/components/header/Header";
import Navbar from "@/components/header/Navbar";
import Catalog from "@/components/products/Catalog";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Top />
      <Header />
      <Navbar />
      <Catalog />
      <Footer />
    </>
  );
}
