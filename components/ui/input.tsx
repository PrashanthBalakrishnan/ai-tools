"use client";

import { cn } from "@/lib/utils";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
  placeholder,
  className,
  inputClassName,
}) => {
  return (
    <div className={cn(className)}>
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <div>
        <input
          className={cn(
            "placeholde:text-gray-400 h-10 rounded-md p-1.5 px-4 py-2 outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
            inputClassName,
            errors[id] && "focus:ring-rose-500",
            disabled && "cursor-default opacity-50",
          )}
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          placeholder={placeholder}
          {...register(id, { required })}
        />
      </div>
    </div>
  );
};
export default Input;
