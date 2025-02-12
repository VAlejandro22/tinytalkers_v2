"use client";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import StarsCanvas from "@/components/main/StarsBackground";
export default function Vision() {
  return (
    <main className="h-full w-full ">
      <StarsCanvas />
    {/* // <main className="h-full w-full  "> */}

      <div className="flex flex-col  md:gap-20">
        {/* <Banner /> */}
        <About />
        {/* <Projects />
        <Footer /> */}
      </div>
    </main>
  );
}
