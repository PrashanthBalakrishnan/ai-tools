"use client";
import Heading from "@/components/Heading";

import { MessageSquare } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

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
        className="focus-within:shadow-s grid w-full grid-cols-12 gap-2 rounded-lg border p-4 px-3 md:px-6"
      >
        <Input
          label="Prompt"
          errors={errors}
          register={register}
          id="prompt"
          placeholder="How far is the moon from earth?"
          className="col-span-12 border-0 lg:col-span-10 "
        />
        <Button className="col-span-12 w-full bg-violet-500 hover:bg-violet-600 focus-visible:outline-violet-600 lg:col-span-2">
          Generate
        </Button>
      </form>
    </section>
  );
};
export default ConversationPage;
