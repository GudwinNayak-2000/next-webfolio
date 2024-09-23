import Image from "next/image";
import type { Metadata } from "next";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import HeaderOne from "@/components/header/header-one";
import Footer from "@/components/footer/footer-one";
import HeroOne from "@/components/hero/hero-one";

export default function Home() {
  return (
    <>
    <HeaderOne/>
    <HeroOne/>
    <Footer/>
    </>
  );
}

export const metadata: Metadata = {
  title: "Gudwin's Portfolio : Frontend Developer",
  description: "A portfolio website created using Next.js and framer motion",
  icons:{
    icon:"/logo/logo-16.png"
  },
  openGraph:mergeOpenGraph({
    title: "Welcome- Home -Gudwin's Portfolio",
    description: "A portfolio website created using Next.js and framer motion",
    url: "https://gudwin-portfolio.vercel.app/",
  })
};
