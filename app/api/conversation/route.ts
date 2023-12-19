import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

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
      messages: [
        { role: "user", content: messages[messages.length - 1].content },
      ],
      max_tokens: 100,
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[CONVERSATION ERROR", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
