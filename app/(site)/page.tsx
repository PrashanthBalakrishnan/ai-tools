"use client";

import { useRouter } from "next/navigation";
import { Pill, MessageSquare, Code, Image, Scale } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const tools = [
  {
    label: "Chat",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/20",
    hoverColor: "hover:bg-violet-500/50",
    href: "/conversation",
  },
  {
    label: "Image generator",
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
  {
    label: "Lawyer",
    icon: Scale,
    color: "text-blue-500",
    bgColor: "bg-blue-500/20",
    hoverColor: "hover:bg-blue-500/50",
    href: "/lawyer",
  },
  {
    label: "Doctor",
    icon: Pill,
    color: "text-teal-500",
    bgColor: "bg-teal-500/20",
    hoverColor: "hover:bg-teal-500/50",
    href: "/doctor",
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
              className={cn(
                tool.bgColor,
                tool.hoverColor,
                "text-lg hover:text-white",
              )}
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
