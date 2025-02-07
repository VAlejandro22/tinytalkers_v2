// "use client";

// import React from "react";
// import Image from "next/image";

// const Banner: React.FC<{}> = () => {
//   return (
//     <div className="flex flex-row items-center justify-center px-20 mt-[100px] z-[20] ">
//       <div className="flex flex-col  justify-center  text-center">
        
//         <div className="flex mt-10 justify-center">
//           <p className="text-4xl font-medium tracking-tighter  text-black-300 max-w-[600px]">
//             Bienvenido {" "}
//             <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
//               a
//             </span>
//           </p>
//           <Image
//             src="/popcorn.gif"
//             height={60}
//             width={60}
//             alt="Ibrahim Memon"
//           />
//         </div>

//         <div className="flex flex-col gap-6 mt-7 cursor-pointer animate-bounce tracking-tighter text-7xl text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400 max-w-[600px] w-auto h-auto ">
//           TINYTALKERS
//         </div>
//         <div className="justify-center flex  ">
//           <Image
//             priority
//             src="/chatbot.svg"
//             height={255}
//             width={255}
//             alt="Ibrahim Memon"
//           />
//         </div>
        

//         {/* <p className="text-md text-gray-200 my-5 max-w-[600px]">
//           Passionate Software Engineer with a focus on React Native development,
//           dedicated to crafting elegant and user-friendly mobile applications.
//         </p>
//         <div className="text-md flex justify-center">
//           <button
//             onClick={() => window.open("mailto:ibrahimmemon930@gmail.com")}
//             className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
//           >
//             Contact Me
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Banner;


"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-5 sm:px-10 md:px-20 mt-40 md:mt-[100px] z-[20]">
      <div className="flex flex-col justify-center text-center w-full">
        
        <div className="flex flex-col sm:flex-row items-center justify-center mt-5 md:mt-10">
          <p className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-black-300 max-w-[600px]">
            Bienvenido{" "}
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              a
            </span>
          </p>
          <Image
            src="/popcorn.gif"
            height={50}
            width={50}
            className="ml-2"
            alt="Popcorn GIF"
          />
        </div>

        <div className="flex flex-col gap-4 mt-5 md:mt-7 cursor-pointer animate-bounce tracking-tighter text-5xl sm:text-6xl md:text-7xl text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
          TINYTALKERS
        </div>

        <div className="flex justify-center mt-5 md:mt-7">
          <Image
            priority
            src="/chatbot.svg"
            height={255}
            width={255}
            // className="h-auto w-auto max-w-full"
            alt="Chatbot"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

