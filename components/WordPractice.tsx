"use client"; // Mark as a Client Component
import { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { checkPronunciation } from "../lib/openai";

type WordPracticeProps = {
  words: string[];
};

export default function WordPractice({ words }: WordPracticeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isCorrect, setIsCorrect] = useState(false);

  const handleNextWord = () => {
    setCurrentIndex((prev) => prev + 1);
    resetTranscript();
    setIsCorrect(false);
  };

  const handleCheckPronunciation = async () => {
    const isAccurate = await checkPronunciation(words[currentIndex], transcript);
    setIsCorrect(isAccurate);
  };

  if (currentIndex >= words.length) {
    return (
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">¡Felicidades!</h2>
        <p className="text-xl text-white">Has completado el tema.</p>
        <a
          href="/"
          className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Volver al lobby
        </a>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-white mb-8">
        Palabra: {words[currentIndex]}
      </h2>
      <button
        onClick={() => SpeechRecognition.startListening()}
        className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors"
      >
        Escuchar
      </button>
      <p className="text-white mt-4">Repite la palabra:</p>
      <p className="text-white text-2xl font-bold mb-4">{transcript}</p>
      <button
        onClick={handleCheckPronunciation}
        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
      >
        Verificar
      </button>
      {isCorrect && (
        <div className="mt-6">
          <p className="text-white text-xl">¡Correcto!</p>
          <button
            onClick={handleNextWord}
            className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Siguiente palabra
          </button>
        </div>
      )}
    </div>
  );
}