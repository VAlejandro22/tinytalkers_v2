
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const Projects: React.FC<{}> = () => {
//   const { ref, inView } = useInView({ threshold: 0.7 });
//   return (
//     <section id="projects">
//       <h2 className="text-purple-700 font-bold text-center text-6xl pt-[35px]">
//         PROJECTS
//       </h2>
//       <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
//         EXPLORE NOW
//       </p>
//       <div className=" container mx-auto 2xl  ">
//         <div className="flex-col flex md:flex-row  mt-7">
//           <Link
//             href="https://web.hr/"
//             rel="noopener noreferrer"
//             target="_blank"
//             className="z-[1]"
//           >
//             <div className="flex-row flex mb-5">
//               <Image
//                 src="/FirstProject.png"
//                 height={150}
//                 width={150}
//                 alt="Ibrahim Memon - UX Design Project"
//               />
//               <div className="p-3">
//                 <p className="text-purple-700 font-bold text-xl">WebHR</p>
//                 <p className="text-gray-500 text-[10px]">
//                   Designed a modern UI website comprising more than 50 screens,
//                   along with the integration of a blog using Next.js.
//                 </p>
//               </div>
//             </div>
//           </Link>
//           <Link
//             href="https://hireside.com/"
//             rel="noopener noreferrer"
//             target="_blank"
//             className="z-[1]"
//           >
//             <div className="flex-row flex mb-5">
//               <Image
//                 src="/SecondProject.png"
//                 height={150}
//                 width={150}
//                 alt="Ibrahim Memon - UX Design Project"
//               />
//               <div className="p-3">
//                 <p className="text-purple-700 font-bold text-xl">HireSide</p>
//                 <p className="text-gray-500 text-[10px]">
//                   Developed a web application on Next.js that allows users to
//                   apply for jobs, create job posts, and manage their company
//                   profiles.
//                 </p>
//               </div>
//             </div>
//           </Link>
//         </div>
//         <div className="flex-col flex md:flex-row ">
//           <Link
//             href="https://www.vergesystems.com/"
//             rel="noopener noreferrer"
//             target="_blank"
//             className="z-[1]"
//           >
//             <div className="flex-row flex mb-5">
//               <Image
//                 src="/ThirdProject.png"
//                 height={150}
//                 width={150}
//                 alt="Ibrahim Memon - UX Design Project"
//               />
//               <div className=" p-3 ">
//                 <p className="text-purple-700 font-bold text-xl">
//                   Verge Systems
//                 </p>
//                 <p className="text-gray-500 text-[10px]">
//                   Developed the Verge Systems website using React.js.
//                 </p>
//               </div>
//             </div>
//           </Link>
//           <Link
//             href="http://44.201.47.75/"
//             rel="noopener noreferrer"
//             target="_blank"
//             className="z-[1]"
//           >
//             <div className="flex-row flex mb-5">
//               <Image
//                 src="/FourProject.png"
//                 height={150}
//                 width={150}
//                 alt="Ibrahim Memon - UX Design Project"
//               />
//               <div className="p-3 ">
//                 <p className="text-purple-700 font-bold text-xl">Payoasis</p>
//                 <p className="text-gray-500 text-[10px]">
//                   Designed the modern UI for a banking website utilizing Gatsby.
//                 </p>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;




// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const Projects: React.FC<{}> = () => {
//   const { ref, inView } = useInView({ threshold: 0.2 });
//   return (
//     // <section id="projects">
//       <motion.section
//             id="projects"
//             ref={ref}
//             className="flex flex-col items-center justify-center h-full relative overflow-hidden "
//             initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
//             animate={inView ? { opacity: 1, rotateY: 0, scale: 1 } : { opacity: 0, rotateY: -90, scale: 0.8 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//           >
//       <h2 className="text-orange-500 font-semibold text-center text-6xl mt-7 ">
//         QUÉ TEMA QUIERES APRENDER HOY?
//       </h2>
//       <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-2xl ">
//         EXPLORA AHORA
//       </p>
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-7 place-items-center">
//   {[
//     { href: "https://web.hr/", src: "/family.png", title: "FAMILIA" },
//     { href: "https://hireside.com/", src: "/emotional.png", title: "EMOCIONES" },
//     { href: "https://www.vergesystems.com/", src: "/house.png", title: "OBJETOS DEL HOGAR" },
//     { href: "http://44.201.47.75/", src: "/healthy.png", title: "ALIMENTOS Y BEBIDAS" },
//     { href: "https://www.vergesystems.com/", src: "/colour.png", title: "COLORES" },
//     { href: "http://44.201.47.75/", src: "/endocrine-system.png", title: "PARTES DEL CUERPO" },
//     { href: "https://www.vergesystems.com/", src: "/laundry.png", title: "ROPA" },
//     { href: "http://44.201.47.75/", src: "/livestock.png", title: "ANIMALES" }
//   ].map((item, index) => (
//     <Link
//       key={index}
//       href={item.href}
//       rel="noopener noreferrer"
//       target="_blank"
//       className="z-[1] flex flex-col items-center text-center"
//     >
//       <Image
//         src={item.src}
//         height={200}
//         width={200}
//         alt={item.title}
//       />
//       <div className="p-2 mt-2 rounded-full w-full border-2 border-b-2 border-purple-700">
//         <p className="text-purple-700  text-2xl">{item.title}</p>
//       </div>
//     </Link>
//   ))}
// </div>

//     </motion.section>
//   );
// };

// export default Projects;




"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <motion.section
      id="projects"
      ref={ref}
      className="flex flex-col items-center justify-center h-full relative overflow-hidden px-5 sm:px-10"
      initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
      animate={inView ? { opacity: 1, rotateY: 0, scale: 1 } : { opacity: 0, rotateY: -90, scale: 0.8 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h2 className="text-orange-500 font-semibold text-center text-3xl sm:text-5xl md:text-6xl mt-5 sm:mt-7">
        QUÉ TEMA QUIERES APRENDER HOY?
      </h2>
      <p className="tracking-[0.2em] sm:tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-lg sm:text-xl md:text-2xl">
        EXPLORA AHORA
      </p>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 sm:mt-7 place-items-center">
        {[
          { href: "/practice/familia", src: "/family.png", title: "FAMILIA" },
          { href: "/practice/emociones", src: "/emotional.png", title: "EMOCIONES" },
          { href: "/practice/objetos_del_hogar", src: "/house.png", title: "OBJETOS DEL HOGAR" },
          { href: "/practice/alimentos_y_bebidas", src: "/healthy.png", title: "ALIMENTOS Y BEBIDAS" },
          { href: "/practice/colores", src: "/colour.png", title: "COLORES" },
          { href: "/practice/partes_del_cuerpo", src: "/endocrine-system.png", title: "PARTES DEL CUERPO" },
          { href: "/practice/ropa", src: "/laundry.png", title: "ROPA" },
          { href: "/practice/animales", src: "/livestock.png", title: "ANIMALES" }
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            rel="noopener noreferrer"
            
            className="z-[1] flex flex-col items-center text-center"
          >
            <Image
              src={item.src}
              height={200}
              width={200}
              className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[200px]"
              alt={item.title}
            />
            <div className="p-2 mt-2 rounded-full w-full border-2 border-b-2 border-purple-700">
              <p className="text-purple-700 text-lg sm:text-2xl">{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
