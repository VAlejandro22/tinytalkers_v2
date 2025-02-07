"use client";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import StarsCanvas from "@/components/main/StarsBackground";
export default function Home() {
  return (
    <main className="h-full w-full  bg-[url('/fondo2.jpg')] bg-cover bg-center bg-no-repeat">
      <StarsCanvas />
    {/* // <main className="h-full w-full  "> */}

      <div className="flex flex-col  md:gap-20">
        <Banner />
        <About />
        {/* <Experience /> */}
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
