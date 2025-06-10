import type { ChangeEvent, HTMLProps } from "react";

interface SearchProps extends HTMLProps<HTMLInputElement> {
  value?: string | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Search({ value = "", onChange, ...rest }: SearchProps) {
  return (
    <>
      <input
        className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        {...rest}
      />
    </>
  );
}
