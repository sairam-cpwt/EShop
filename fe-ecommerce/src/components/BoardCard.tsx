import type { ReactNode } from "react";

interface BoardCardProps {
  title: string;
  subTitle: string;
  icon: ReactNode;
  className: string;
}

export default function BoardCard({
  icon,
  subTitle,
  title,
  className,
}: BoardCardProps) {
  return (
    <div
      className={`flex justify-between items-center p-5 rounded-md gap-8 ${className}`}
    >
      <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
        <h2 className="text-3xl font-bold">{title}</h2>
        <span className="text-md font-medium">{subTitle}</span>
      </div>

      <div className="w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl">
        {icon}
      </div>
    </div>
  );
}
