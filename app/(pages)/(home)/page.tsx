import type { Metadata } from "next";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import HeaderOne from "@/components/header/header-one";
import Footer from "@/components/footer/footer-one";
import HeroOne from "@/components/hero/hero-one";
import QuoteOne from "@/components/wrappers/quotes/quote-one";
import Chat from "@/components/chatbot/chat-assist";

export default function Home() {
  return (
    <>
    <HeaderOne/>
    <HeroOne/>
    <main className="flex flex-col py-12 gap-12">
      <QuoteOne/>
    </main>
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
