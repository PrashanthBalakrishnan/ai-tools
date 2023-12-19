import { NextResponse } from "next/server";
import OpenAIApi from "openai";

const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt } = body;
    if (!openai.apiKey) {
      return new NextResponse("No API key found", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("No prompt found", { status: 400 });
    }

    const response = await openai.images.generate({
      prompt,
      size: "256x256",
      n: 1,
    });

    return NextResponse.json(response.data[0].url);
  } catch (error) {
    console.log("[LOGO ERROR", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
