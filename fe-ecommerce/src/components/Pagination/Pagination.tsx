import { ChevronsLeft, ChevronsRight } from "lucide-react";

interface Props {
  pageNumber: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  perPage: number;
  showItems: number;
}

export default function Pagination({
  onPageChange,
  pageNumber,
  perPage,
  showItems,
  totalItems,
}: Props) {
  const totalPages = Math.ceil(totalItems / perPage);

  // Calculate start page for pagination window
  let startPage = Math.max(1, pageNumber - Math.floor(showItems / 2));

  // Ensure we don't exceed total pages
  const endPage = Math.min(startPage + showItems, totalPages + 1);

  // Adjust start page if we're near the end
  if (endPage - startPage < showItems) {
    startPage = Math.max(1, endPage - showItems);
  }

  const createBtn = () => {
    const btns = [];
    for (let i = startPage; i < endPage; i++) {
      btns.push(
        <li
          key={i}
          onClick={() => onPageChange(i)}
          className={`${
            pageNumber === i
              ? "bg-indigo-300 shadow-lg shadow-indigo-300/50 text-white"
              : "bg-slate-600 hover:bg-indigo-400 shadow-lg hover:shadow-indigo-500/50 hover:text-white text-[#d0d2d6]"
          } w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer`}
        >
          {i}
        </li>
      );
    }

    return <>{btns}</>;
  };

  return (
    <ul className="flex gap-2 my-5">
      {pageNumber > 1 && (
        <li
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-600 text-white cursor-pointer"
          onClick={() => onPageChange(pageNumber - 1)}
        >
          <ChevronsLeft />
        </li>
      )}
      {createBtn()}

      {pageNumber < totalPages && (
        <li
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-600 text-white cursor-pointer"
          onClick={() => onPageChange(pageNumber + 1)}
        >
          <ChevronsRight />
        </li>
      )}
    </ul>
  );
}
