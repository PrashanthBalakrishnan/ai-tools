"use client";

import Empty from "@/components/Empty";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/input";
import axios from "axios";
import { SendHorizonal, Image as logo } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

const LogoPage = () => {
  const [images, setImages] = useState<string>("");
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
      const response = await axios.post("/api/image", data);

      const url = response.data;

      setImages(url);
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
        title="Image Generator"
        desc="Create images using AI prompts."
        icon={logo}
        iconColor="text-red-500"
        bgColor="bg-red-500/10"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-4 grid grid-cols-12 gap-2 rounded-lg border p-4 px-3 md:px-6"
      >
        <label htmlFor="prompt" className="sr-only">
          Prompt
        </label>
        <Input
          errors={errors}
          register={register}
          id="prompt"
          placeholder="Describe your image"
          className="col-span-12 h-10 w-full focus-visible:ring-red-200 lg:col-span-10"
        />

        <Button
          className="col-span-12 lg:col-span-2"
          variant="red"
          disabled={isSubmitting}
        >
          Generate
          <SendHorizonal size={15} />
        </Button>
      </form>
      <div className="mt-4 space-y-4">
        {isSubmitting && (
          <div className="flex w-full items-center justify-center rounded-lg p-8">
            <Loader />
          </div>
        )}

        {images === "" && !isSubmitting && (
          <div>
            <Empty label="No images generated" />
          </div>
        )}
        <div className="mx-4 flex flex-col-reverse items-center gap-y-4">
          {images === "" ? null : (
            <div className="relative aspect-square h-80 w-80 items-center">
              <Image src={images} alt="Logo" fill />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default LogoPage;
