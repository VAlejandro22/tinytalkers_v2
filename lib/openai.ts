import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function checkPronunciation(expectedWord: string, userInput: string): Promise<boolean> {
  const prompt = `Is the pronunciation of "${userInput}" at least 90% accurate compared to "${expectedWord}" in Spanish? Answer with "yes" or "no".`;
  const response = await openai.completions.create({
    model: "text-davinci-003",
    prompt,
    max_tokens: 5,
  });

  return response.choices[0].text.trim().toLowerCase() === "yes";
}