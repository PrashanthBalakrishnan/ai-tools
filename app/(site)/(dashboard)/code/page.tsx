"use client";

import Heading from "@/components/Heading";
import { Code } from "lucide-react";

const CodePage = () => {
  return (
    <section>
      <Heading
        title="Code Generation"
        desc="Create code snippets using AI prompts."
        icon={Code}
        iconColor="text-green-500"
        bgColor="bg-green-500/10"
      />
    </section>
  );
};
export default CodePage;
