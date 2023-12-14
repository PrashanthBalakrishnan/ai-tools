"use client";

import { useRouter } from "next/navigation";
import clsx from "clsx";
import { ArrowRight, MessageSquare } from "lucide-react";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    outlineColor: "focus:ring-violet-500",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: MessageSquare,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    outlineColor: "focus:ring-red-500",
    href: "/image",
  },
  {
    label: "Code Generation",
    icon: MessageSquare,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    outlineColor: "focus:ring-green-500",
    href: "/code",
  },
];
export default function Home() {
  const router = useRouter();
  return (
    <section className="mb-8 space-y-4 py-10">
      <div>
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          Explore the power of AI
        </h2>
        <p className="text-center text-sm font-light lg:text-lg">
          The AI Playground is a collection of tools that demonstrate the
          capabilities of AI.
        </p>
      </div>
      <div className="space-y-4 px-4 md:px-20 lg:px-32">
        {tools.map((tool) => (
          <button
            key={tool.href}
            onClick={() => router.push(tool.href)}
            className={clsx(
              "mx-auto flex w-full items-center rounded-xl border p-4 shadow-md transition-all hover:shadow-xl focus:outline-none focus:ring-2",
              tool.outlineColor,
            )}
          >
            <div className="flex items-center gap-5">
              <div
                className={clsx(
                  "flex h-16 w-16 items-center justify-center rounded-full",
                  tool.bgColor,
                )}
              >
                <tool.icon className={tool.color} size={32} />
              </div>
              <div className="text-center text-lg font-bold">{tool.label}</div>
            </div>
            <ArrowRight className="ml-auto h-10 w-10" />
          </button>
        ))}
      </div>
    </section>
  );
}
