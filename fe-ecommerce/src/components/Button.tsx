import type { ButtonHTMLAttributes, ReactNode } from "react";
import BtnLoader from "./BtnLoader/BtnLoader";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
}

export default function Button({ children, loading, ...rest }: BtnProps) {
  let content: ReactNode;
  if (loading) {
    content = <BtnLoader />;
  } else {
    content = children;
  }
  return (
    <button
      {...rest}
      className={`rounded-md px-7 py-3 mb-3 disabled:bg-slate-400 ${rest.className}`}
    >
      {content}
    </button>
  );
}
