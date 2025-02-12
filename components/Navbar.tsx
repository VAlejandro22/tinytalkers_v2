"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar: React.FC<{}> = () => {
  const router = useRouter();


  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          title="ibrahim logo"
          // href="/"
          onClick={() => router.push('/')}
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/Tinytalkers.svg"
            alt="Ibrahim Memon - Developer"
            width={100}
            height={100}
            sizes="100vw"
            className="w-full h-auto"
          />
        </a>
        <div className="flex flex-row gap-5">
        <div
            onClick={() => router.push('/vision')}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#ff2200] rounded-xl hover:text-white  text-black  py-2 px-5"
          >
            Vision
          </div>
          <div
            onClick={() => router.push('/juegos')}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#ff2200] rounded-xl hover:text-white  text-black  py-2 px-5"
          >
            Juegos
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <div
            onClick={() => window.open("mailto:tinytalkers@gmail.com")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#ff2200] rounded-xl hover:text-white  text-black  py-2 px-5"
          >
            Contacto
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
