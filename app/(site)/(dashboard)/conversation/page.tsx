"use client";
import Heading from "@/components/Heading";

import { Bot, MessageSquare, SendHorizonal, User } from "lucide-react";
import { FieldValues, SubmitHandler, set, useForm } from "react-hook-form";
import { useState } from "react";
import Input from "@/components/ui/Input";

import { Button } from "@/components/ui/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import { cn } from "@/lib/utils";
import Empty from "@/components/Empty";

type messageType = {
  content: string;
  role: string;
};

const ConversationPage = () => {
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
    try {
      const userMessage: messageType = {
        role: "user",
        content: data.prompt,
      };
      const newMessage = [...messages, userMessage];
      const response = await axios.post("/api/conversation", {
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
        title="Conversation"
        desc="Have a conversation with AI."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-4 grid grid-cols-12 gap-2 rounded-lg border p-4 px-3 md:px-6"
      >
        <Input
          label="Prompt"
          errors={errors}
          register={register}
          id="prompt"
          placeholder="How far is the moon from earth? "
          className="col-span-12 h-10 w-full lg:col-span-10"
          inputClassName="w-full focus:ring-violet-800 focus-visible:ring-violet-800"
        />

        <Button
          className="col-span-12 lg:col-span-2"
          variant="purple"
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
            <Empty label="No conversation started" />
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
                  : "bg-violet-500/30",
              )}
            >
              {message.role === "user" ? <User size={25} /> : <Bot size={30} />}
              <p className="text-sm">{message.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ConversationPage;
