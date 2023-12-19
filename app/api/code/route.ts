import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

const instructionMessage = {
  role: "system",
  content:
    "You are a code generator!. You must only answer in markdown code snippets!. Use code comments for explanation.DONT answer any question that is not code related!.",
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
