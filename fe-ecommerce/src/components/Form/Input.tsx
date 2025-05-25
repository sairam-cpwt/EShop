import type { ReactNode } from "react";
import {
  useFormContext,
  type FieldPath,
  type FieldValues,
  type RegisterOptions,
} from "react-hook-form";

interface InputProps<T extends FieldValues> {
  type: "text" | "email" | "phone" | "password";
  name: FieldPath<T>;
  label: ReactNode;
  placeholder?: string;
  validation?: RegisterOptions;
}

export default function Input<T extends FieldValues>({
  label,
  name,
  type,
  placeholder,
}: InputProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();

  return (
    <div className="flex flex-col w-full gap-1 mb-3">
      <label htmlFor="name">{label}</label>

      <div className="flex flex-col gap-2">
        <input
          {...register(name)}
          type={type}
          name={name}
          placeholder={placeholder}
          id={name}
          className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
        />

        {errors[name] && (
          <p className="text-red-500 text-sm mt-1">
            {errors[name]?.message as string}
          </p>
        )}
      </div>
    </div>
  );
}
