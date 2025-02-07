import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();
    
    const prompt = `Eres un guia amigable para un niño que va a practicar la pronunciacion de palabras. Da una cálida bienvenida y explica brevemente el tema "${topic}" de forma sencilla. Maximo 25 palabras`;
    
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: prompt }],
    });

    const message = response.choices[0].message.content;

    return NextResponse.json({ message });
  } catch (error) {
    return NextResponse.json({ error: "Error generando el mensaje." }, { status: 500 });
  }
}
