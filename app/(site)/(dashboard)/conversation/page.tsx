"use client";
import Heading from "@/components/Heading";

import { MessageSquare } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

const ConversationPage = () => {
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      prompt: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
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
        className="ml-auto flex w-[80%]"
      ></form>
    </section>
  );
};
export default ConversationPage;
