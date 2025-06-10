import type { HTMLProps } from "react";
import type { defaultOptions } from "~/types";

interface Props extends HTMLProps<HTMLSelectElement> {
  options?: defaultOptions[];
}

export default function Select({ options, ...rest }: Props) {
  return (
    <>
      <select
        className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
        {...rest}
      >
        {options?.map((option) => {
          return <option value={option.id}>{option?.value}</option>;
        })}
      </select>
    </>
  );
}
