// "use client";

// import { useParams } from "next/navigation";
// import About from "@/components/About";
// import VoiceAssistant from "@/components/VoiceAssistant";
// import WordPractice from "@/components/WordPractice";

// export default function PracticePage() {
//   const { topic } = useParams(); // Obtiene el parámetro de la URL
//   const wordsByTopic: Record<string, string[]> = {
//     familia: ["mamá", "papá", "hermano", "abuela", "primo"],
//     animales: ["perro", "gato", "elefante", "tigre", "oso"],
//     colores: ["rojo", "azul", "verde", "amarillo", "morado"],
//   };

//   const words = wordsByTopic[topic as string] || [];

//   if (!topic || typeof topic !== "string") {
//     return <div className="text-center text-red-500">Tema no encontrado.</div>;
//   }

//   return (
//     <main className="h-full w-full bg-[url('/fondo2.jpg')] bg-cover bg-center bg-no-repeat">
//       <div className="flex flex-col gap-20">
//         <About />
//         <VoiceAssistant topic={topic} />
//         <WordPractice topic={topic as string} words={words} />
//       </div>
//     </main>
//   );
// }

// "use client";

// import { useState } from "react";
// import { useParams } from "next/navigation";
// import About from "@/components/About";
// import VoiceAssistant from "@/components/VoiceAssistant";
// import WordPractice from "@/components/WordPractice";

// export default function PracticePage() {
//   const { topic } = useParams();
//   const [isIntroductionComplete, setIsIntroductionComplete] = useState(false);
//   const [start, setStart] = useState(false);

//   const wordsByTopic: Record<string, string[]> = {
//     familia: ["mamá", "papá", "hermano", "abuela", "primo"],
//     animales: ["perro", "gato", "elefante", "tigre", "oso"],
//     colores: ["rojo", "azul", "verde", "amarillo", "morado"],
//   };

//   const words = wordsByTopic[topic as string] || [];

//   const handleIntroductionComplete = () => {
//     setIsIntroductionComplete(true);
//   };

//   const handleStart = () => {
//     setStart(true);
//   };

//   if (!topic || typeof topic !== "string") {
//     return <div className="text-center text-red-500">Tema no encontrado.</div>;
//   }

//   return (
//     <main className="h-full w-full bg-[url('/fondo2.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center ">
//       <div className="flex flex-col items-center justify-center">
//         {/* <About /> */}
//         {!start && (
//           <VoiceAssistant
//             topic={topic}
//             onIntroductionComplete={handleIntroductionComplete}
//           />
//         )}

//         {isIntroductionComplete && !start && (

//             <button
//               onClick={handleStart}
//               className="px-6 py-3 bg-green-500 text-white rounded-lg"
//             >
//               ¡Empezar!
//             </button>

//         )}

//         {start && <WordPractice topic={topic} words={words} />}
//       </div>
//     </main>
//   );
// }

// "use client";

// import { useState } from "react";
// import { useParams } from "next/navigation";
// import About from "@/components/About";
// import VoiceAssistant from "@/components/VoiceAssistant";
// import WordPractice from "@/components/WordPractice";

// export default function PracticePage() {
//   const { topic } = useParams();
//   const [isIntroductionComplete, setIsIntroductionComplete] = useState(false);
//   const [start, setStart] = useState(false);

//   const wordsByTopic: Record<string, string[]> = {
//     familia: ["mamá", "papá", "hermano", "abuela", "primo"],
//     animales: ["perro", "gato", "elefante", "tigre", "oso"],
//     colores: ["rojo", "azul", "verde", "amarillo", "morado"],
//   };

//   const words = wordsByTopic[topic as string] || [];

//   const handleIntroductionComplete = () => {
//     setIsIntroductionComplete(true);
//   };

//   const handleStart = () => {
//     setStart(true);
//   };

//   if (!topic || typeof topic !== "string") {
//     return <div className="text-center text-red-500">Tema no encontrado.</div>;
//   }

//   return (
//     <main className="h-screen w-full bg-[url('/fondo2.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
//       <div className="flex flex-col items-center justify-center w-full max-w-4xl p-4">
//         <div className="flex flex-row items-center justify-center">
//         {!start && (
//           <VoiceAssistant
//             topic={topic}
//             onIntroductionComplete={handleIntroductionComplete}
//           />
//         )}

//         {isIntroductionComplete && !start && (
//           <button
//             onClick={handleStart}
//             className="px-6 py-3 bg-green-500 text-white rounded-full  shadow-lg transition-all hover:bg-green-600"
//           >
//             ¡Empezar!
//           </button>
//         )}
// </div>
//         {start && <WordPractice topic={topic} words={words} />}
//       </div>
//     </main>
//   );
// } funciona perfecto

"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import About from "@/components/About";
import VoiceAssistant from "@/components/VoiceAssistant";
import WordPractice from "@/components/WordPractice";

export default function PracticePage() {
  const { topic } = useParams();
  const [isIntroductionComplete, setIsIntroductionComplete] = useState(false);
  const [start, setStart] = useState(false);

  const wordsByTopic: Record<string, { word: string; gif: string }[]> = {
    familia: [
      { word: "Mamá", gif: "https://cdn.dribbble.com/users/6976483/screenshots/15615078/media/552da6a21599b36a09ca07adda2b1ec9.gif" },
      { word: "Papá", gif: "https://cdn.dribbble.com/users/2834752/screenshots/6195752/mar_16.gif" },
      { word: "Abuela", gif: "https://cdn.dribbble.com/users/86682/screenshots/3146572/week50_grandma.gif" },
      { word: "Abuelo", gif: "https://th.bing.com/th/id/R.cbd1e14eb7b1f5d5bfcb02233d6b575a?rik=TQ9VefSHVHJDlw&pid=ImgRaw&r=0" },
      { word: "Hermano", gif: "https://i.pinimg.com/originals/bb/a1/7d/bba17d1d8adbe54aec3d62526ac4fd3c.gif" },
      { word: "Hermana", gif: "https://i.pinimg.com/originals/aa/66/0d/aa660d18f7c270d4e3f3205329a382b5.gif" },
      { word: "Amigo", gif: "https://i.pinimg.com/originals/ec/4f/5f/ec4f5f25e85f2e3ce8161f6031aebf80.gif" },
      { word: "Maestra", gif: "https://i.pinimg.com/originals/5f/0d/52/5f0d525b737080ba03f6bc4c5602d69a.gif" },
      { word: "Primo", gif: "https://i.pinimg.com/originals/a3/7b/ae/a37bae1c5b7f9696b0cb3fbd69f55c10.gif" },
      { word: "Tío", gif: "https://i.pinimg.com/originals/e7/07/d5/e707d5df3484c2eb287b3f698bf7fbff.gif" },

    ],
    emociones: [
      { word: "Feliz", gif: "https://media.tenor.com/GftohUydfF0AAAAC/feliz-muy-feliz.gif" },
      { word: "Triste", gif: "https://i.pinimg.com/originals/71/52/98/7152987b3f23308e09671a4d026d58e4.gif" },
      { word: "Enojado", gif: "https://th.bing.com/th/id/R.14887fab374908d4091f97d3324d0286?rik=dZ7q9UaXBcJSvA&riu=http%3a%2f%2folegif.com%2fbin%2fgifs%2f00%2f46%2f78.gif&ehk=v4NI0t7Z8YRiDRzg35X5Ce7vedQbceenPFrEphxQ1wk%3d&risl=&pid=ImgRaw&r=0" },
      { word: "Cansado", gif: "https://c.tenor.com/7sGQudWAAAQAAAAM/tired-skype-emoji.gif" },
      { word: "Asustado", gif: "https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f628.gif" },
      { word: "Contento", gif: "https://th.bing.com/th/id/R.7c52e87d601122d5c6cf8e0b0bce9090?rik=CO%2bfoQM5CaKO%2fQ&pid=ImgRaw&r=0" },
      { word: "Sorprendido", gif: "https://th.bing.com/th/id/R.51ad33e44a979a6fea541144e3ff3ee5?rik=UKvPbYGVbs%2bGLw&pid=ImgRaw&r=0" },
      { word: "Tranquilo", gif: "https://keybe.co/wp-content/uploads/2023/02/EMOJIS_TRANQUILO.gif" },
      { word: "Nervioso", gif: "https://media.tenor.com/sMAMmv0BgFMAAAAC/smiley-emoji.gif" },
      { word: "Emocionado", gif: "https://media.tenor.com/4D53-zz8dAcAAAAM/love-cute.gif" },
    ],
    objetos_del_hogar: [
      { word: "Mesa", gif: "https://i.pinimg.com/originals/e3/12/97/e31297a391da6723ce5417d125962c9b.gif" },
      { word: "Silla", gif: "https://media.baamboozle.com/uploads/images/1616723/63f9867c-8358-4f26-aadd-11dc3c261f1a.gif" },
      { word: "Cama", gif: "https://img.icons8.com/?size=100&id=561&format=png&color=000000" },
      { word: "Sofá", gif: "https://media.lordicon.com/icons/wired/flat/1608-sofa.gif" },
      { word: "Televisor", gif: "https://th.bing.com/th/id/R.ba1f423f132c69b0c57739231f6d91b3?rik=EDhRaaNqz1Cjqw&riu=http%3a%2f%2f24.media.tumblr.com%2fdc2fb6212089fff3893ae5cbd203530a%2ftumblr_mjv57cS2LJ1s5jjtzo1_500.gif&ehk=YERdk5DUT3lolp2dWlAluQEAN61IJn8Cq0QWscK1CUU%3d&risl=&pid=ImgRaw&r=0" },
      { word: "Puerta", gif: "https://img.icons8.com/?size=100&id=eK8cokaFARrK&format=png&color=000000" },
      { word: "Ventana", gif: "https://th.bing.com/th/id/OIP.YU9FRkRG4i3gBZX8BKKXWwHaHa?rs=1&pid=ImgDetMain" },
      { word: "Lámpara", gif: "https://th.bing.com/th/id/OIP.NgcRlxamp3p6qBhxotnRwgHaHa?rs=1&pid=ImgDetMain" },
      { word: "Plato", gif: "https://th.bing.com/th/id/OIP.5AoN9IXPq3DeKVpdL3ZhPQAAAA?rs=1&pid=ImgDetMain" },
      { word: "Vaso", gif: "https://biorak.com.co/wp-content/uploads/2023/07/vasos_bebidas_carton.gif" },
    ],
    alimentos_y_bebidas: [
      { word: "Pan", gif: "https://s.yimg.com/ny/api/res/1.2/C8Inml9ABUB56L6tQO16bA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/26694e106b5afb5981dd3988e0240805" },
      { word: "Leche", gif: "https://amnoticias.com.mx/images/0mendurasg.gif" },
      { word: "Agua", gif: "https://cdn.pixabay.com/animation/2023/06/26/21/48/21-48-10-87_512.gif" },
      { word: "Manzana", gif: "https://usagif.com/wp-content/uploads/gifs/apple-39.gif" },
      { word: "Jugo", gif: "https://th.bing.com/th/id/OIP.i8wDOcwx526_tynQxjsu-QAAAA?rs=1&pid=ImgDetMain" },
      { word: "Sopa", gif: "https://giffun.ru/wp-content/uploads/2023/02/funny-animated-gif-animated-gifs-soup.gif" },
      { word: "Arroz", gif: "https://media.tenor.com/daQZctwFN3kAAAAC/arroz-food.gif" },
      { word: "Huevo", gif: "https://i.pinimg.com/originals/1c/9e/0d/1c9e0d69f7f7d54cb4afc7f11e6ed04b.gif" },
      { word: "Pollo", gif: "https://media2.giphy.com/media/SHxEJgJKSZ1jKYrkPY/giphy.gif?cid=790b761189a07075e7b3c2446ed0c93bf204de90b33c5ce2&rid=giphy.gif&ct=s" },
      { word: "Queso", gif: "https://media4.giphy.com/media/3og0IJa2xGWfhLf7s4/giphy.gif" },
    ],
    colores: [
      { word: "Rojo", gif: "https://i.pinimg.com/originals/80/d5/53/80d553ddd2a42f2bcb81a7b06ccdccbd.jpg" },
      { word: "Azul", gif: "https://th.bing.com/th/id/R.c45a7b06675bef8be6900a8964eba422?rik=9ugxfrsV7N3ftA&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f2507856%2fthumbs%2fo-AZUL-KLEIN-facebook.jpg&ehk=5oSqhdl4QrCCmtQp39qn%2bXT0UQJxn4mkLHBQEOdAldU%3d&risl=&pid=ImgRaw&r=0" },
      { word: "Amarillo", gif: "https://th.bing.com/th/id/OIP.lM3sBPPzOw1lHKoWOHQgxwHaEX?rs=1&pid=ImgDetMain" },
      { word: "Verde", gif: "https://th.bing.com/th/id/OIP.G-tBUklPlZzZBs2eqf8f7AAAAA?rs=1&pid=ImgDetMain" },
      { word: "Naranja", gif: "https://vignette.wikia.nocookie.net/laislaelreality/images/9/9c/Color_naranja.jpg/revision/latest?cb=20160823212530&path-prefix=es" },
      // { word: "Negro", gif: "https://e0.pxfuel.com/wallpapers/967/154/desktop-wallpaper-solid-black-1920%C3%971080-black-solid-color-background-top.jpg" },
      { word: "Blanco", gif: "https://e0.pxfuel.com/wallpapers/806/472/desktop-wallpaper-blank-white-bright-white.jpg" },
      { word: "Morado", gif: "https://static.vecteezy.com/system/resources/previews/015/233/853/non_2x/dark-purple-old-velvet-fabric-texture-used-as-background-empty-purple-fabric-background-of-soft-and-smooth-textile-material-there-is-space-for-text-free-photo.jpg" },
      { word: "Rosa", gif: "https://th.bing.com/th/id/OIP.ZyzMnlAK6X7y6K-jJyi2ugHaEK?rs=1&pid=ImgDetMain" },
      { word: "Gris", gif: "https://th.bing.com/th/id/R.36c755049231a066e1f41dea9b1ca038?rik=hAqmZ9JqvMPOZA&pid=ImgRaw&r=0" },
    ],
    partes_del_cuerpo: [
      { word: "Cabeza", gif: "https://img.icons8.com/?size=100&id=qeYxlZaoymoc&format=png&color=737373" },
      { word: "Manos", gif: "https://img.icons8.com/?size=100&id=2727&format=png&color=737373" },
      { word: "Pies", gif: "https://img.icons8.com/?size=100&id=8610&format=png&color=737373" },
      { word: "Ojos", gif: "https://em-content.zobj.net/source/noto-emoji-animations/344/eyes_1f440.gif" },
      { word: "Nariz", gif: "https://breatheright.es/wp-content/uploads/sites/10/2022/11/nose.gif" },
      { word: "Boca", gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWw4NWJjb3dpdzNteG4zZ3ExY2N5M3BkeWxoejF6ODFmODhxN29xaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/QhsiEs8SRd0oNKqrMI/giphy.gif" },
      { word: "Orejas", gif: "https://static.wixstatic.com/media/69a578_7c8445f1871b404e9a69efef493619be~mv2.gif" },
      { word: "Brazos", gif: "https://em-content.zobj.net/source/noto-emoji-animations/344/flexed-biceps_light-skin-tone_1f4aa-1f3fb_1f3fb.gif" },
      { word: "Piernas", gif: "https://i.pinimg.com/originals/1a/42/0e/1a420ee63e3d876f446ec324448ed65e.gif" },
      { word: "Dedos", gif: "https://i.pinimg.com/originals/b1/03/3b/b1033bc996c69d3a6003c2fa07281aaf.gif" },
    ],
    ropa: [
      { word: "Camisa", gif: "https://cdn.pixabay.com/animation/2023/05/05/07/39/07-39-07-226_512.gif" },
      { word: "Pantalón", gif: "https://media.tenor.com/mR3MRRV1DZAAAAAM/jeans-denim.gif" },
      { word: "Vestido", gif: "https://25.media.tumblr.com/tumblr_m4p365nzqP1ro8cmco1_500.gif" },
      { word: "Zapatos", gif: "https://i.pinimg.com/originals/bd/b3/22/bdb32276ef547cef5524fea6bab2805c.gif" },
      { word: "Calcetines", gif: "https://i.pinimg.com/originals/7a/4c/e6/7a4ce677a6d4bafe50c9bb49c32528b8.gif" },
      { word: "Gorro", gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzZ3bnF3ODJnMzk5ZGdjanY2MzFrcnF0aXFsNzlyaGdjdTFxdWx1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/6GTbFozQoHeCfuZgXO/giphy.gif" },
      { word: "Chaqueta", gif: "https://media2.giphy.com/media/4T3mOHSEsP9UbT0lny/giphy.gif?cid=790b7611248caa8ecf486f127417f8ef094b69c3cbf52bc8&rid=giphy.gif&ct=s" },
      { word: "Bufanda", gif: "https://img1.picmix.com/output/stamp/normal/5/3/2/9/2409235_030f8.gif" },
      { word: "Falda", gif: "https://media.baamboozle.com/uploads/images/330622/1671299448_252804_gif-url.gif" },
      { word: "Guantes", gif: "https://media.tenor.com/vhex_0NaxZ0AAAAi/speedfest-automovilismo.gif" },
    ],
    animales: [
      { word: "Perro", gif: "https://cdn-icons-gif.flaticon.com/11251/11251047.gif" },
      { word: "Gato", gif: "https://blog.joypixels.com/content/images/2019/06/cat_face_1024.gif" },
      { word: "Pájaro", gif: "https://cdn.svgator.com/assets/landing-pages/svg-to-gif/f6/animated-flying-bird.gif" },
      { word: "Pez", gif: "https://media.tenor.com/vR057wvo2tUAAAAi/fish-joypixels.gif" },
      { word: "Caballo", gif: "https://media.tenor.com/kttV6V_t16QAAAAi/horse-joypixels.gif" },
      { word: "Vaca", gif: "https://www.gifss.com/animales/vacas/images/vaca-06.gif" },
      { word: "Cerdo", gif: "https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f416.gif" },
      { word: "Conejo", gif: "https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f407.gif" },
      { word: "Gallina", gif: "https://i.pinimg.com/originals/43/7f/df/437fdfb3cc50e6ac56477351ea7b7e9e.gif" },
      { word: "León", gif: "https://th.bing.com/th/id/R.1b2faad8f46530a0688cc3203bf97aee?rik=GQOK7Jv%2bYmp0jA&pid=ImgRaw&r=0" },
    ],

    // Puedes continuar agregando más categorías aquí con sus respectivos GIFs...
  };


  const words = wordsByTopic[topic as string] || [];

  const stopAssistantSpeech = () => {
    window.speechSynthesis.cancel();
  };
  const handleIntroductionComplete = () => {
    setIsIntroductionComplete(true);
  };

  const handleStart = () => {
    stopAssistantSpeech(); 
    setStart(true);
  };

  if (!topic || typeof topic !== "string") {
    return <div className="text-center text-red-500">Tema no encontrado.</div>;
  }

  return (
    <main className="h-screen w-full  flex justify-center items-center  bg-[url('/fondo2.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl p-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {!start && (
            <VoiceAssistant
              topic={topic}
              onIntroductionComplete={handleIntroductionComplete}
            />
          )}

          {isIntroductionComplete && !start && (
            <button
              onClick={handleStart}
              className="px-6 py-3 bg-green-500 text-white rounded-full shadow-lg transition-all hover:bg-green-600"
            >
              ¡Empezar!
            </button>
          )}

          {!isIntroductionComplete && !start && (
            <button
              onClick={handleStart}
              className="px-6 py-3 bg-green-500 text-white rounded-full shadow-lg transition-all hover:bg-green-600"
            >
              Saltar introducción
            </button>
          )}
        </div>
        {start && <WordPractice topic={topic} words={words} />}
      </div>
    </main>
  );
}

