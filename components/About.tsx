// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const About: React.FC<{}> = () => {
//   const { ref, inView } = useInView({ threshold: 0.5 });

//   return (
//     <motion.section
//       id="about"
//       ref={ref}
//       className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-16"
//       initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
//       animate={inView ? { opacity: 1, rotateY: 0, scale: 1 } : { opacity: 0, rotateY: -90, scale: 0.8 }}
//       transition={{ duration: 1, ease: "easeOut" }}
//     >
//       <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
//         <h1 className="text-purple-700 font-semibold text-6xl">APRENDAMOS JUNTOS!!</h1>
//         <p className="tracking-[0.5em] text-transparent font-light  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-2xl font-semibold">
//         "Pequeñas frases, grandes avances"
//         </p>

//       </div>
//     </motion.section>
//   );
// };

// export default About;


"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <motion.section
      id="about"
      ref={ref}
      className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden pt-10 sm:pt-16 px-5 sm:px-10"
      initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
      animate={inView ? { opacity: 1, rotateY: 0, scale: 1 } : { opacity: 0, rotateY: -90, scale: 0.8 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex flex-col justify-around items-center text-center max-w-[900px] w-full">
        <h1 className="text-purple-700 font-semibold text-3xl sm:text-4xl md:text-6xl">
          APRENDAMOS JUNTOS!!
        </h1>
        <p className="tracking-[0.2em] sm:tracking-[0.5em] text-transparent font-light bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-lg sm:text-xl md:text-2xl font-semibold mt-3">
          "Pequeñas frases, grandes avances"
        </p>
      </div>
    </motion.section>
  );
};

export default About;
