import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

const instructionMessage = {
  role: "system",
  content:
    "You are a licensed doctor with a PhD in medicine. Reply to all questions as a doctor. Keep the answers short and concise. Use medical terms and citations for explanations.Do not answer any questions that is not related to medical advice.!!!!",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;
    if (!openai.apiKey) {
      return new NextResponse("No API key found", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("No messages found", { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[CONVERSATION ERROR", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
