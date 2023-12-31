"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  id: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  className,
  type,
  register,
  errors,
  id,
  required,
  ...props
}) => {
  return (
    <input
      type={type}
      className={cn(
        "border-input focus-visible:ring-inset-2 flex h-10 w-full  rounded-md  px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
      {...register(id, { required })}
    />
  );
};
export default Input;
