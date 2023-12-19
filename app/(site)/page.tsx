"use client";

import { useRouter } from "next/navigation";
import clsx from "clsx";
import { ArrowRight, MessageSquare, Code, Image } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/20",
    hoverColor: "hover:bg-violet-500/50",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: Image,
    color: "text-red-500",
    bgColor: "bg-red-500/20",
    hoverColor: "hover:bg-red-500/50",

    href: "/image",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-500",
    bgColor: "bg-green-500/20",
    hoverColor: "hover:bg-green-500/50",
    href: "/code",
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <section className="mb-8 space-y-4 py-10">
      <div>
        <h1 className="text-center text-2xl font-bold md:text-4xl">
          Explore the power of AI
        </h1>
        <p className="text-center text-sm font-light lg:text-lg">
          The AI Playground is a collection of tools that demonstrate the
          capabilities of AI.
        </p>
      </div>
      <div className="space-y-4 px-4 md:px-20 lg:px-32">
        {tools.map((tool) => (
          <div key={tool.href}>
            <Button
              onClick={() => router.push(tool.href)}
              className={cn(tool.bgColor, tool.hoverColor, "hover:text-white")}
              size="card"
            >
              <tool.icon className={cn(tool.color)} />
              {tool.label}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
