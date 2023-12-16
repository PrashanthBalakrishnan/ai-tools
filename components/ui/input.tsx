"use client";

import clsx from "clsx";
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
}) => {
  return (
    <div className="p-5">
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <div className="mt-2">
        <input
          className={clsx(
            ` `,
            errors[id] && "focus:ring-rose-500",
            disabled && "cursor-default opacity-50",
            className,
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
