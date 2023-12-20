"use client";

import Empty from "@/components/Empty";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/input";
import { messageType } from "@/lib/types";
import { cn } from "@/lib/utils";
import axios from "axios";
import { Bot, Code, SendHorizonal, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import ReactMarkdown from "react-markdown";

const CodePage = () => {
  const [messages, setMessages] = useState<messageType[]>([]);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      prompt: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (data.prompt === "") return;
    try {
      const userMessage: messageType = {
        role: "user",
        content: data.prompt,
      };
      const newMessage = [...messages, userMessage];
      const response = await axios.post("/api/code", {
        messages: newMessage,
      });

      setMessages((current) => [...current, userMessage, response.data]);
      reset();
    } catch (error: any) {
      console.log(error.messages);
    } finally {
      router.refresh();
    }
  };

  return (
    <section>
      <Heading
        title="Code Generation"
        desc="Create code snippets using AI prompts."
        icon={Code}
        iconColor="text-green-500"
        bgColor="bg-green-500/10"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-4 grid grid-cols-12 gap-2 rounded-lg border p-4 px-3 md:px-6"
      >
        <label htmlFor="prompt" className="sr-only">
          Ask any code related question
        </label>
        <Input
          errors={errors}
          register={register}
          id="prompt"
          placeholder="Ask any code related question"
          className="col-span-12 h-10 w-full focus-visible:ring-green-200 lg:col-span-10"
        />

        <Button
          className="col-span-12 lg:col-span-2"
          variant="green"
          disabled={isSubmitting}
        >
          Send
          <SendHorizonal size={15} />
        </Button>
      </form>
      <div className="mt-4 space-y-4">
        {isSubmitting && (
          <div className="flex w-full items-center justify-center rounded-lg p-8">
            <Loader />
          </div>
        )}

        {messages.length === 0 && !isSubmitting && (
          <div>
            <Empty label="No code generation has started" />
          </div>
        )}
        <div className="mx-4 flex flex-col-reverse gap-y-4">
          {messages.map((message) => (
            <div
              key={message.content}
              className={cn(
                "flex w-full items-start gap-x-8 rounded-lg p-8",
                message.role === "user"
                  ? "border border-black/10 bg-white"
                  : "bg-green-500/30",
              )}
            >
              {message.role === "user" ? <User size={25} /> : <Bot size={30} />}
              <ReactMarkdown
                components={{
                  pre: ({ node, ...props }) => (
                    <div className="my-2 w-full overflow-auto rounded-lg bg-black/10 p-2">
                      <pre {...props} />
                    </div>
                  ),
                  code: ({ node, ...props }) => (
                    <code className="rounded-lg bg-black/10 p-1" {...props} />
                  ),
                }}
                className="overflow-hidden text-sm leading-7"
              >
                {message.content || ""}
              </ReactMarkdown>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CodePage;
