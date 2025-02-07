// "use client";

// import { useEffect, useState, useRef } from "react";

// interface WordPracticeProps {
//   topic: string;
//   words: string[]; 
// }

// const WordPractice: React.FC<WordPracticeProps> = ({ topic, words }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isCorrect, setIsCorrect] = useState(false);
//   const recognitionRef = useRef<SpeechRecognition | null>(null);
//   const [isListening, setIsListening] = useState(false);

//   const currentWord = words[currentIndex];

//   useEffect(() => {
//     speakWord();
//   }, [currentIndex]);

//   const speakWord = () => {
//     const utterance = new SpeechSynthesisUtterance(currentWord);
//     utterance.lang = "es-ES";
//     window.speechSynthesis.speak(utterance);
//   };

//   const speakPhrase = (frase:string) => {
//     const utterance = new SpeechSynthesisUtterance(frase);
//     utterance.lang = "es-ES";
//     window.speechSynthesis.speak(utterance);
//   };

//   const startListening = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Tu navegador no soporta reconocimiento de voz.");
//       return;
//     }

//     setIsListening(true);
//     setIsCorrect(false);

//     const recognition = new (window as any).webkitSpeechRecognition();
//     recognition.lang = "es-ES";
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     recognition.onresult = (event: SpeechRecognitionEvent) => {
//       const transcript = event.results[0][0].transcript.toLowerCase();
//       console.log("Dijiste:", transcript);

//       if (transcript.includes(currentWord.toLowerCase())) {
//         setIsCorrect(true);
//         speakPhrase('Perfecto!! lo hiciste excelente.');
//       } else {
//         setIsCorrect(false);
//         speakPhrase('Casi!! vuelve a intentarlo.');
//       }
//       setIsListening(false);
//     };

//     recognition.onerror = () => {
//       setIsListening(false);
//       alert("Hubo un error en el reconocimiento. Inténtalo de nuevo.");
//     };

//     recognition.start();
//     recognitionRef.current = recognition;
//   };

//   const stopListening = () => {
//     if (recognitionRef.current) {
//       recognitionRef.current.stop();
//     }
//     setIsListening(false);
//   };

//   const nextWord = () => {
//     if (currentIndex < words.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//       setIsCorrect(false);
//     } else {
//       alert("¡Has completado todas las palabras!");
//     }
//   };

//   return (
//     <div className="p-6 rounded-lg shadow-md text-center  mb-20">
//       <h2 className="text-2xl font-bold mb-4">Tema: {topic}</h2>
//       <p className="text-xl text-blue-600 font-semibold">{currentWord}</p>

//       <div className="flex justify-center gap-4 mt-4">
//         <button
//           onClick={speakWord}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//         >
//           🔊 Repetir
//         </button>

//         <button
//           onMouseDown={startListening}
//           onMouseUp={stopListening}
//           className={`px-4 py-2 text-white rounded-lg ${
//             isListening ? "bg-red-500" : "bg-green-500"
//           }`}
//         >
//           🎤 Mantén presionado para hablar
//         </button>
//       </div>

//       {isCorrect && (
//         <p className="text-green-600 font-semibold mt-4">¡Correcto! ✅</p>
//       )}

//       {!isCorrect && isListening === false && (
//         <p className="text-red-600 mt-2">Inténtalo de nuevo 🔁</p>
//       )}

//       {isCorrect && (
//         <button
//           onClick={nextWord}
//           className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg"
//         >
//           Siguiente ➡️
//         </button>
//       )}
//     </div>
//   );
// };

// export default WordPractice;



// "use client";

// import { useEffect, useState, useRef } from "react";

// interface WordPracticeProps {
//   topic: string;
//   words: string[]; 
// }

// const WordPractice: React.FC<WordPracticeProps> = ({ topic, words }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [istry, setIsTry] = useState(false);
//   const recognitionRef = useRef<SpeechRecognition | null>(null);
//   const [isListening, setIsListening] = useState(false);

//   const currentWord = words[currentIndex];
//   const mediaByWord: Record<string, string> = {
//     mamá: "/gifs/mama.gif",
//     papá: "/gifs/papa.gif",
//     perro: "/gifs/perro.gif",
//     // Agrega más palabras y sus respectivos medios
//   };

//   useEffect(() => {
//     speakWord();
//   }, [currentIndex]);

//   const speakWord = () => {
//     const utterance = new SpeechSynthesisUtterance(currentWord);
//     utterance.lang = "es-ES";
//     window.speechSynthesis.speak(utterance);
//   };

//   const speakPhrase = (frase:string) => {
//     const utterance = new SpeechSynthesisUtterance(frase);
//     utterance.lang = "es-ES";
//     window.speechSynthesis.speak(utterance);
//   };

//   const startListening = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Tu navegador no soporta reconocimiento de voz.");
//       return;
//     }

//     setIsListening(true);
//     setIsCorrect(false);

//     const recognition = new (window as any).webkitSpeechRecognition();
//     recognition.lang = "es-ES";
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     recognition.onresult = (event: SpeechRecognitionEvent) => {
//       const transcript = event.results[0][0].transcript.toLowerCase();
//       console.log("Dijiste:", transcript);

//       if (transcript.includes(currentWord.toLowerCase())) {
//         setIsCorrect(true);
//         setIsTry(false);
//         speakPhrase('Perfecto!! lo hiciste excelente.');
//       } else {
//         setIsCorrect(false);
//         setIsTry(true);
//         speakPhrase('Casi!! vuelve a intentarlo.');
//       }
//       setIsListening(false);
//     };

//     recognition.onerror = () => {
//       setIsListening(false);
//       alert("Hubo un error en el reconocimiento. Inténtalo de nuevo.");
//     };

//     recognition.start();
//     recognitionRef.current = recognition;
//   };

//   const stopListening = () => {
//     if (recognitionRef.current) {
//       recognitionRef.current.stop();
//     }
//     setIsListening(false);
//   };

//   const nextWord = () => {
//     if (currentIndex < words.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//       setIsCorrect(false);
//     } else {
//       alert("¡Has completado todas las palabras!");
//     }
//   };

//   return (
//     <div className="p-6 rounded-lg text-center h-full w-full mt-10 md:mt-[100px] z-[20]">
//       <h2 className="text-2xl font-bold mb-4">Tema: {topic}</h2>
//       <p className="text-xl text-blue-600 font-semibold">{currentWord}</p>

//       <img src={mediaByWord[currentWord]} alt={currentWord} className="mt-4" />

//       <div className="flex justify-center gap-4 mt-4">
//         <button
//           onClick={speakWord}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//         >
//           🔊 Repetir
//         </button>

//         <button
//           onMouseDown={startListening}
//           onMouseUp={stopListening}
//           className={`px-4 py-2 text-white rounded-lg ${
//             isListening ? "bg-red-500" : "bg-green-500"
//           }`}
//         >
//           🎤 Mantén presionado para hablar
//         </button>
//       </div>

//       {isCorrect && (
//         <p className="text-green-600 font-semibold mt-4">¡Correcto! ✅</p>
//       )}

//       {istry  && (
//         <p className="text-red-600 mt-2">Inténtalo de nuevo 🔁</p>
//       )}

//       {isCorrect && (
//         <button
//           onClick={nextWord}
//           className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg"
//         >
//           Siguiente ➡️
//         </button>
//       )}
//     </div>
//   );
// };

// export default WordPractice;



// "use client";

// import { useEffect, useState, useRef } from "react";

// interface WordPracticeProps {
//   topic: string;
//   words: string[]; 
// }

// const WordPractice: React.FC<WordPracticeProps> = ({ topic, words }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [istry, setIsTry] = useState(false);
//   const recognitionRef = useRef<SpeechRecognition | null>(null);
//   const [isListening, setIsListening] = useState(false);

//   const currentWord = words[currentIndex];
//   const mediaByWord: Record<string, string> = {
//     mamá: "https://cdn.dribbble.com/users/6976483/screenshots/15615078/media/552da6a21599b36a09ca07adda2b1ec9.gif",
//     papá: "https://cdn.dribbble.com/users/2834752/screenshots/6195752/mar_16.gif",
//     perro: "/gifs/perro.gif",
//   };

//   useEffect(() => {
//     speakWord();
//   }, [currentIndex]);

//   const speakWord = () => {
//     const utterance = new SpeechSynthesisUtterance(currentWord);
//     utterance.lang = "es-ES";
//     window.speechSynthesis.speak(utterance);
//   };

//   const speakPhrase = (frase:string) => {
//     const utterance = new SpeechSynthesisUtterance(frase);
//     utterance.lang = "es-ES";
//     window.speechSynthesis.speak(utterance);
//   };

//   const startListening = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Tu navegador no soporta reconocimiento de voz.");
//       return;
//     }

//     setIsListening(true);
//     setIsCorrect(false);

//     const recognition = new (window as any).webkitSpeechRecognition();
//     recognition.lang = "es-ES";
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     recognition.onresult = (event: SpeechRecognitionEvent) => {
//       const transcript = event.results[0][0].transcript.toLowerCase();
//       console.log("Dijiste:", transcript);

//       if (transcript.includes(currentWord.toLowerCase())) {
//         setIsCorrect(true);
//         setIsTry(false);
//         speakPhrase('Perfecto!! lo hiciste excelente.');
//       } else {
//         setIsCorrect(false);
//         setIsTry(true);
//         speakPhrase('Casi!! vuelve a intentarlo.');
//       }
//       setIsListening(false);
//     };

//     recognition.onerror = () => {
//       setIsListening(false);
//       alert("Hubo un error en el reconocimiento. Inténtalo de nuevo.");
//     };

//     recognition.start();
//     recognitionRef.current = recognition;
//   };

//   const stopListening = () => {
//     if (recognitionRef.current) {
//       recognitionRef.current.stop();
//     }
//     setIsListening(false);
//   };

//   const nextWord = () => {
//     if (currentIndex < words.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//       setIsCorrect(false);
//     } else {
//       alert("¡Has completado todas las palabras!");
//     }
//   };

//   return (
//     <div className="p-6 flex flex-col items-center justify-center rounded-lg text-center h-full w-full mt-10 md:mt-[100px] z-[20]">
//     <h2 className="text-2xl font-bold mb-4">Tema: {topic}</h2>
//     <p className="text-xl text-blue-600 font-semibold">{currentWord}</p>
  
//     <img
//       src={mediaByWord[currentWord]}
//       alt={currentWord}
//       className="mt-4 w-60 h-auto rounded-full mx-auto"
//     />
  
//     <div className="flex justify-center gap-4 mt-4">
//       <button
//         onClick={speakWord}
//         className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//       >
//         🔊 Repetir
//       </button>
  
//       <button
//         onMouseDown={startListening}
//         onMouseUp={stopListening}
//         className={`px-4 py-2 text-white rounded-lg ${
//           isListening ? "bg-red-500" : "bg-green-500"
//         }`}
//       >
//         🎤 Mantén presionado para hablar
//       </button>
//     </div>
  
//     {isCorrect && (
//       <p className="text-green-600 font-semibold mt-4">¡Correcto! ✅</p>
//     )}
  
//     {istry && <p className="text-red-600 mt-2">Inténtalo de nuevo 🔁</p>}
  
//     {isCorrect && (
//       <button
//         onClick={nextWord}
//         className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg"
//       >
//         Siguiente ➡️
//       </button>
//     )}
//   </div>
  
//   );
// };

// export default WordPractice; funciona perfecto


// "use client";

// import { useEffect, useState, useRef } from "react";

// interface WordPracticeProps {
//   topic: string;
//   words: { word: string; gif: string }[];
// }


// const WordPractice: React.FC<WordPracticeProps> = ({ topic, words }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [istry, setIsTry] = useState(false);
//   const recognitionRef = useRef<SpeechRecognition | null>(null);
//   const [isListening, setIsListening] = useState(false);

//   const currentWord = words[currentIndex]?.word || "";
//   const currentGif = words[currentIndex]?.gif || "";

//   useEffect(() => {
//     speakWord();
//   }, [currentIndex]);

//   const speakWord = () => {
//     const utterance = new SpeechSynthesisUtterance(currentWord);
//     utterance.lang = "es-ES";
//     window.speechSynthesis.speak(utterance);
//   };

//   const speakPhrase = (frase: string) => {
//     const utterance = new SpeechSynthesisUtterance(frase);
//     utterance.lang = "es-ES";
//     window.speechSynthesis.speak(utterance);
//   };

//   const startListening = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Tu navegador no soporta reconocimiento de voz.");
//       return;
//     }

//     setIsListening(true);
//     setIsCorrect(false);

//     const recognition = new (window as any).webkitSpeechRecognition();
//     recognition.lang = "es-ES";
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     recognition.onresult = (event: SpeechRecognitionEvent) => {
//       const transcript = event.results[0][0].transcript.toLowerCase();
//       console.log("Dijiste:", transcript);

//       if (transcript.includes(currentWord.toLowerCase())) {
//         setIsCorrect(true);
//         setIsTry(false);
//         speakPhrase("¡Perfecto! Lo hiciste excelente.");
//       } else {
//         setIsCorrect(false);
//         setIsTry(true);
//         speakPhrase("¡Casi! Vuelve a intentarlo.");
//       }
//       setIsListening(false);
//     };

//     recognition.onerror = () => {
//       setIsListening(false);
//       alert("Hubo un error en el reconocimiento. Inténtalo de nuevo.");
//     };

//     recognition.start();
//     recognitionRef.current = recognition;
//   };

//   const stopListening = () => {
//     if (recognitionRef.current) {
//       recognitionRef.current.stop();
//     }
//     setIsListening(false);
//   };

//   const nextWord = () => {
//     if (currentIndex < words.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//       setIsCorrect(false);
//     } else {
//       alert("¡Has completado todas las palabras!");
//     }
//   };

//   return (
//     <div className="p-6 flex flex-col items-center justify-center rounded-lg text-center h-full w-full mt-10 md:mt-[100px] z-[20]">
//       <h2 className="text-2xl font-bold mb-4">Tema: {topic}</h2>
//       <p className="text-xl text-blue-600 font-semibold">{currentWord}</p>

//       <img
//         src={currentGif}
//         alt={currentWord}
//         className="mt-4 w-60 h-auto rounded-full mx-auto"
//       />

//       <div className="flex justify-center gap-4 mt-4">
//         <button
//           onClick={speakWord}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//         >
//           🔊 Repetir
//         </button>

//         <button
//           onMouseDown={startListening}
//           onMouseUp={stopListening}
//           className={`px-4 py-2 text-white rounded-lg ${
//             isListening ? "bg-red-500" : "bg-green-500"
//           }`}
//         >
//           🎤 Mantén presionado para hablar
//         </button>
//       </div>

//       {isCorrect && (
//         <p className="text-green-600 font-semibold mt-4">¡Correcto! ✅</p>
//       )}

//       {istry && <p className="text-red-600 mt-2">Inténtalo de nuevo 🔁</p>}

//       {isCorrect && (
//         <button
//           onClick={nextWord}
//           className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg"
//         >
//           Siguiente ➡️
//         </button>
//       )}
//     </div>
//   );
// };

// export default WordPractice;



// "use client";

// import { useEffect, useState, useRef } from "react";

// interface WordPracticeProps {
//   topic: string;
//   words: { word: string; gif: string }[];
// }


// const WordPractice: React.FC<WordPracticeProps> = ({ topic, words }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [istry, setIsTry] = useState(false);
//   const recognitionRef = useRef<any>(null);

//   const [isListening, setIsListening] = useState(false);

//   const currentWord = words[currentIndex]?.word || "";
//   const currentGif = words[currentIndex]?.gif || "";

//   useEffect(() => {
//     speakWord();
//   }, [currentIndex]);

//   const speakWord = () => {
//     const utterance = new SpeechSynthesisUtterance(currentWord);
//     utterance.lang = "es-ES";
//     window.speechSynthesis.speak(utterance);
//   };

//   const speakPhrase = (frase: string) => {
//     const utterance = new SpeechSynthesisUtterance(frase);
//     utterance.lang = "es-ES";
//     window.speechSynthesis.speak(utterance);
//   };

//   const startListening = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Tu navegador no soporta reconocimiento de voz.");
//       return;
//     }

//     setIsListening(true);
//     setIsCorrect(false);

//     const recognition = new (window as any).webkitSpeechRecognition();
//     recognition.lang = "es-ES";
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     recognition.onresult = (event: any) => {
//       const transcript = event.results[0][0].transcript.toLowerCase();
//       console.log("Dijiste:", transcript);

//       if (transcript.includes(currentWord.toLowerCase())) {
//         setIsCorrect(true);
//         setIsTry(false);
//         speakPhrase("¡Perfecto! Lo hiciste excelente.");
//       } else {
//         setIsCorrect(false);
//         setIsTry(true);
//         speakPhrase("¡Casi! Vuelve a intentarlo.");
//       }
//       setIsListening(false);
//     };

//     recognition.onerror = () => {
//       setIsListening(false);
//       alert("Hubo un error en el reconocimiento. Inténtalo de nuevo.");
//     };

//     recognition.start();
//     recognitionRef.current = recognition;
//   };

//   const stopListening = () => {
//     if (recognitionRef.current) {
//       recognitionRef.current.stop();
//     }
//     setIsListening(false);
//   };

//   const nextWord = () => {
//     if (currentIndex < words.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//       setIsCorrect(false);
//     } else {
//       alert("¡Has completado todas las palabras!");
//     }
//   };

//   return (
//     <div className="p-6 flex flex-col items-center justify-center rounded-lg text-center h-full w-full mt-8 md:mt-[30px] z-[20]">
//       {/* <h2 className="text-2xl font-bold mb-4">Tema: {topic}</h2> */}
//       <p className="text-3xl text-blue-600 font-bold">{currentWord}</p>

//       <img
//         src={currentGif}
//         alt={currentWord}
//         className="mt-4 w-60 h-auto rounded-full mx-auto"
//       />

//       <div className="flex justify-center gap-4 mt-4">
//         <button
//           onClick={speakWord}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//         >
//           🔊 Repetir
//         </button>

//         <button
//           onMouseDown={startListening}
//           onMouseUp={stopListening}
//           className={`px-4 py-2 text-white rounded-lg ${
//             isListening ? "bg-red-500" : "bg-green-500"
//           }`}
//         >
//           🎤 Mantén presionado para hablar
//         </button>
//       </div>

//       {isCorrect && (
//         <p className="text-green-600 font-semibold mt-4">¡Correcto! ✅</p>
//       )}

//       {istry && <p className="text-red-600 mt-2">Inténtalo de nuevo 🔁</p>}

//       {isCorrect && (
//         <button
//           onClick={nextWord}
//           className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg"
//         >
//           Siguiente ➡️
//         </button>
//       )}
//     </div>
//   );
// };

// export default WordPractice;

// "use client";

// import { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";

// interface WordPracticeProps {
//   topic: string;
//   words: { word: string; gif: string }[];
// }

// const WordPractice: React.FC<WordPracticeProps> = ({ topic, words }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [istry, setIsTry] = useState(false);
//   const [isFinished, setIsFinished] = useState(false);
//   const recognitionRef = useRef<any>(null);
//   const router = useRouter();
//   const [isListening, setIsListening] = useState(false);

//   const currentWord = words[currentIndex]?.word || "";
//   const currentGif = words[currentIndex]?.gif || "";

//   useEffect(() => {
//     speakWord();
//   }, [currentIndex]);

//   const speakWord = (rate: number = 1) => {
//     const utterance = new SpeechSynthesisUtterance(currentWord);
//     utterance.lang = "es-ES";
//     utterance.rate = rate;
//     window.speechSynthesis.speak(utterance);
//   };

//   const speakPhrase = (frase: string) => {
//     const utterance = new SpeechSynthesisUtterance(frase);
//     utterance.lang = "es-ES";
//     window.speechSynthesis.speak(utterance);
//   };

//   const startListening = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Tu navegador no soporta reconocimiento de voz.");
//       return;
//     }

//     setIsListening(true);
//     setIsCorrect(false);

//     const recognition = new (window as any).webkitSpeechRecognition();
//     recognition.lang = "es-ES";
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     recognition.onresult = (event: any) => {
//       const transcript = event.results[0][0].transcript.toLowerCase();
//       console.log("Dijiste:", transcript);

//       if (transcript.includes(currentWord.toLowerCase())) {
//         setIsCorrect(true);
//         setIsTry(false);
//         speakPhrase("¡Perfecto! Lo hiciste excelente.");
//       } else {
//         setIsCorrect(false);
//         setIsTry(true);
//         speakPhrase("¡Casi! Vuelve a intentarlo.");
//       }
//       setIsListening(false);
//     };

//     recognition.onerror = () => {
//       setIsListening(false);
//       alert("Hubo un error en el reconocimiento. Inténtalo de nuevo.");
//     };

//     recognition.start();
//     recognitionRef.current = recognition;
//   };

//   const stopListening = () => {
//     if (recognitionRef.current) {
//       recognitionRef.current.stop();
//     }
//     setIsListening(false);
//   };

//   const nextWord = () => {
//     if (currentIndex < words.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//       setIsCorrect(false);
//     } else {
//       alert("¡Has completado todas las palabras!");
//     }
//   };

//   return (
//     <div className="p-6 flex flex-col items-center justify-center rounded-lg text-center h-full w-full mt-10 md:mt-[100px] z-[20]">
//       <p className="text-xl text-blue-600 font-semibold">{currentWord}</p>

//       <img
//         src={currentGif}
//         alt={currentWord}
//         className="mt-4 w-60 h-auto rounded-full mx-auto"
//       />

//       <div className="flex justify-center gap-4 mt-4">
//         <button
//           onClick={() => speakWord(1)}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//         >
//           🔊 Repetir
//         </button>

//         <button
//           onClick={() => speakWord(0.5)}
//           className="px-4 py-2 bg-blue-400 text-white rounded-lg"
//         >
//           🐢 Repetir lento
//         </button>

//         <button
//           onMouseDown={startListening}
//           onMouseUp={stopListening}
//           className={`px-4 py-2 text-white rounded-lg ${
//             isListening ? "bg-red-500" : "bg-green-500"
//           }`}
//         >
//           🎤 Mantén presionado para hablar
//         </button>
//       </div>

//       {isCorrect && (
//         <p className="text-green-600 font-semibold mt-4">¡Correcto! ✅</p>
//       )}

//       {istry && <p className="text-red-600 mt-2">Inténtalo de nuevo 🔁</p>}

//       {isCorrect && (
//         <button
//           onClick={nextWord}
//           className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg"
//         >
//           Siguiente ➡️
//         </button>
//       )}
//     </div>
//   );
// };

// export default WordPractice;

"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface WordPracticeProps {
  topic: string;
  words: { word: string; gif: string }[];
}

const WordPractice: React.FC<WordPracticeProps> = ({ topic, words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [istry, setIsTry] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const recognitionRef = useRef<any>(null);
  const router = useRouter();
  const [isListening, setIsListening] = useState(false);

  const currentWord = words[currentIndex]?.word || "";
  const currentGif = words[currentIndex]?.gif || "";

  useEffect(() => {
    if (!isFinished) {
      speakWord();
    }
  }, [currentIndex, isFinished]);

  const speakWord = (rate: number = 1) => {
    const utterance = new SpeechSynthesisUtterance(currentWord);
    utterance.lang = "es-ES";
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
  };

  const speakPhrase = (frase: string) => {
    const utterance = new SpeechSynthesisUtterance(frase);
    utterance.lang = "es-ES";
    window.speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Tu navegador no soporta reconocimiento de voz.");
      return;
    }

    setIsListening(true);
    setIsCorrect(false);

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "es-ES";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      console.log("Dijiste:", transcript);

      if (transcript.includes(currentWord.toLowerCase())) {
        setIsCorrect(true);
        setIsTry(false);
        speakPhrase("¡Perfecto! Lo hiciste excelente.");
      } else {
        setIsCorrect(false);
        setIsTry(true);
        speakPhrase("¡Casi! Vuelve a intentarlo.");
      }
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
      alert("Hubo un error en el reconocimiento. Inténtalo de nuevo.");
    };

    recognition.start();
    recognitionRef.current = recognition;
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  const nextWord = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsCorrect(false);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    const availableTopics = ["familia", "emociones", "objetos_del_hogar", "alimentos_y_bebidas", "colores", "partes_del_cuerpo", "ropa", "animales"]
      .filter(t => t !== topic)
      .map(t => t.replace(/_/g, " "));

    return (
      <div className="flex flex-col items-center justify-center text-center p-6">
        <motion.h2 
          className="text-3xl font-bold text-green-500"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ¡Felicitaciones! Lograste pronunciar todas las palabras! 🎉
        </motion.h2>
        <p className="text-lg mt-4">¿Quieres practicar un nuevo tema?</p>
        <div className="flex gap-4 mt-4">
          {availableTopics.map((newTopic) => (
            <button 
              key={newTopic} 
              onClick={() => router.push(`/practice/${newTopic.replace(/ /g, "_")}`)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              {newTopic.charAt(0).toUpperCase() + newTopic.slice(1)}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col items-center justify-center rounded-lg text-center h-full w-full mt-4 md:mt-[100px] z-[20]">
      <motion.p 
        className="text-3xl text-black-600 font-semibold"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        {currentWord}
      </motion.p>

      <img
        src={currentGif}
        alt={currentWord}
        className="mt-4 w-60 h-auto rounded-full mx-auto"
      />

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => speakWord(1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          🔊 Repetir
        </button>

        <button
          onClick={() => speakWord(0.5)}
          className="px-4 py-2 bg-blue-400 text-white rounded-lg"
        >
          🐢 Repetir lento
        </button>
<div className="flex flex-col justify-center items-center gap-2">
        <button 
          onMouseDown={startListening} 
          onMouseUp={stopListening} 
          onTouchStart={startListening} 
          onTouchEnd={stopListening} 
          className={`w-14 h-14 flex items-center justify-center text-white rounded-full ${isListening ? "bg-red-500" : "bg-green-500"}`}
        >
          <span className="invisible md:visible ">🎤</span>
        </button>
        <p className="text-gray-500 text-sm md:hidden">Mantén presionado</p></div>
      </div>

      {isCorrect && (
        <p className="text-green-600 font-semibold mt-4">¡Correcto! ✅</p>
      )}

      {istry && <p className="text-red-600 mt-2">Inténtalo de nuevo 🔁</p>}

      {isCorrect && (
        <button
          onClick={nextWord}
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg"
        >
          Siguiente ➡️
        </button>
      )}
    </div>
  );
};

export default WordPractice;


