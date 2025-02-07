// "use client";

// import { useEffect, useState, useRef } from "react";

// interface VoiceAssistantProps {
//   topic: string;
// }

// const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ topic }) => {
//   const [message, setMessage] = useState<string | null>(null);
//   const hasFetched = useRef(false); // Controla si ya se hizo la petición
//   const hasSpoken = useRef(false); // Controla si ya se habló

//   useEffect(() => {
//     if (hasFetched.current) return; // Evita llamadas múltiples a la API
//     hasFetched.current = true;

//     const fetchMessage = async () => {
//       try {
//         const response = await fetch("/api/generate-message", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ topic }),
//         });

//         const data = await response.json();
//         setMessage(data.message);
//       } catch (error) {
//         console.error("Error obteniendo el mensaje:", error);
//       }
//     };

//     fetchMessage();
//   }, [topic]);

//   useEffect(() => {
//     if (message && !hasSpoken.current) {
//       hasSpoken.current = true;
//       speakMessage(message);
//     }
//   }, [message]);

//   const speakMessage = (text: string) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = "es-ES";
//     window.speechSynthesis.speak(utterance);
//   };

//   return (
//     <div className="p-4 bg-blue-100 rounded-lg shadow-md">
//       <h2 className="text-lg font-semibold">Asistente de Voz</h2>
//       <p>{message || "Cargando..."}</p>
//     </div>
//   );
// };

// export default VoiceAssistant;




// import { useEffect, useState, useRef } from "react";

// interface VoiceAssistantProps {
//   topic: string;
//   onIntroductionComplete: () => void; // Propiedad para notificar cuando la introducción termine
// }

// const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ topic, onIntroductionComplete }) => {
//   const [message, setMessage] = useState<string | null>(null);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const hasFetched = useRef(false);

//   useEffect(() => {
//     if (hasFetched.current) return;
//     hasFetched.current = true;

//     const fetchMessage = async () => {
//       try {
//         const response = await fetch("/api/generate-message", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ topic }),
//         });

//         const data = await response.json();
//         setMessage(data.message);
//       } catch (error) {
//         console.error("Error obteniendo el mensaje:", error);
//       }
//     };

//     fetchMessage();
//   }, [topic]);

//   useEffect(() => {
//     if (message && !isSpeaking) {
//       setIsSpeaking(true);
//       speakMessage(message);
//     }
//   }, [message]);

//   const speakMessage = (text: string) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = "es-ES";
//     utterance.onend = () => {
//       setIsSpeaking(false);
//       onIntroductionComplete(); // Llama al callback cuando termine
//     };
//     window.speechSynthesis.speak(utterance);
//   };

//   // Rutas de los GIFs o videos según el tema
//   const mediaByTopic: Record<string, string> = {
//     familia: "https://media.giphy.com/media/aaYGpg1QAeWFXBOTyk/giphy.gif?cid=790b76111dtfp220xp7ao796e4syro2dviv5sr4fao9dg6mb&ep=v1_gifs_search&rid=giphy.gif&ct=g",
//     animales: "/gifs/animales.gif",
//     colores: "/gifs/colores.gif",
//   };

//   return (
//     <div className="h-full w-full flex-col justify-center rounded-lg shadow-md text-center pt-60">
//       <h2 className="text-lg font-semibold">Asistente de Voz</h2>
//       {message ? (
//         <>
//           <p>{message}</p>
//           <img src={mediaByTopic[topic]} alt="Asistente" className="mt-4" />
//         </>
//       ) : (
//         <p>Cargando...</p>
//       )}
//     </div>
//   );
// };

// export default VoiceAssistant;



// "use client";

// import { useEffect, useState, useRef } from "react";

// interface VoiceAssistantProps {
//   topic: string;
//   onIntroductionComplete: () => void; // Propiedad para notificar cuando la introducción termine
// }

// const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ topic, onIntroductionComplete }) => {
//   const [message, setMessage] = useState<string | null>(null);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const hasFetched = useRef(false);

//   useEffect(() => {
//     if (hasFetched.current) return;
//     hasFetched.current = true;

//     const fetchMessage = async () => {
//       try {
//         const response = await fetch("/api/generate-message", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ topic }),
//         });

//         const data = await response.json();
//         setMessage(data.message);
//       } catch (error) {
//         console.error("Error obteniendo el mensaje:", error);
//       }
//     };

//     fetchMessage();
//   }, [topic]);

//   useEffect(() => {
//     if (message && !isSpeaking) {
//       setIsSpeaking(true);
//       speakMessage(message);
//     }
//   }, [message]);

//   const speakMessage = (text: string) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = "es-ES";
//     utterance.onend = () => {
//       setIsSpeaking(false);
//       onIntroductionComplete(); // Llama al callback cuando termine
//     };
//     window.speechSynthesis.speak(utterance);
//   };

//   // Rutas de los GIFs o videos según el tema
//   const mediaByTopic: Record<string, string> = {
//     familia: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXBkNGZpbnhkOWFiZGNrM24ydXZibmF6NTJtOXEwNGx0NnJwZWo1OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3og0ICvhFbIQDGWsne/giphy.gif",
//     animales: "/gifs/animales.gif",
//     colores: "/gifs/colores.gif",
//   };

//   return (
//     <div className="flex flex-col items-center justify-center  p-6 rounded-lg  max-w-lg mt-10 md:mt-[100px] z-[20]">
//       {/* <h2 className="text-2xl font-semibold text-blue-800 mb-4">Asistente de Voz</h2> */}
//       {message ? (
//         <>
//           {/* <p className="text-lg text-gray-700 mb-4">{message}</p> */}
//           <img
//             src={mediaByTopic[topic]}
//             alt="Asistente"
//             className="max-w-full h-auto rounded-lg shadow-md mt-4"
//           />
//         </>
//       ) : (
//         <p className="text-lg text-gray-500">Cargando...</p>
//       )}
//     </div>
//   );
// };

// export default VoiceAssistant;

"use client";

import { useEffect, useState, useRef } from "react";

interface VoiceAssistantProps {
  topic: string;
  onIntroductionComplete: () => void; // Propiedad para notificar cuando la introducción termine
}

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ topic, onIntroductionComplete }) => {
  const [message, setMessage] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchMessage = async () => {
      try {
        const response = await fetch("/api/generate-message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ topic }),
        });

        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error("Error obteniendo el mensaje:", error);
      }
    };

    fetchMessage();
  }, [topic]);

  useEffect(() => {
    if (message && !isSpeaking) {
      setIsSpeaking(true);
      speakMessage(message);
    }
  }, [message]);

  const speakMessage = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";
    utterance.onend = () => {
      setIsSpeaking(false);
      onIntroductionComplete(); // Llama al callback cuando termine
    };
    window.speechSynthesis.speak(utterance);
  };

  // Rutas de los GIFs o videos según el tema
  const mediaByTopic: Record<string, string> = {
    familia: "https://i.pinimg.com/originals/61/b2/d3/61b2d33f39927afa72e5f57a28cc7c83.gif",
    emociones: "https://i.pinimg.com/736x/47/ad/7b/47ad7bad68967cfa7d45382f9d615c0b.jpg",
    objetos_del_hogar: "https://i.pinimg.com/736x/6f/b6/11/6fb611cef0366ebee5f2e0546422dc6d.jpg",
    alimentos_y_bebidas:"https://i.pinimg.com/736x/ff/3e/d0/ff3ed03561cfdfc10b4c3c9a5fb1ab1f.jpg",
    colores: "https://static.vecteezy.com/system/resources/previews/014/462/738/original/set-of-colorful-objects-learning-basic-colors-for-preschoolers-flashcard-with-red-green-orange-blue-yellow-colors-vector.jpg",
    partes_del_cuerpo: "https://eresmama.com/wp-content/uploads/2019/11/cuerpo-humano-nino-scaled.jpg",
    ropa: "https://afconmall.com/wp-content/uploads/2022/03/H47de094a5af24444b272517c09826dabn.jpg",
    animales:"https://i.pinimg.com/736x/29/73/08/297308a677b9a75b1cb4f6d01e877b45.jpg",

  };

  return (
    <div className="p-6 rounded-lg text-center h-full w-full  z-[20]">
      {message ? (
        <>
          <img
            src={mediaByTopic[topic]}
            alt="Asistente"
            className="w-auto h-80 rounded-lg shadow-md mt-4"
          />
        </>
      ) : (
        <p className="text-lg text-gray-500">Cargando...</p>
      )}
    </div>
  );
};

export default VoiceAssistant;


