import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import Pagination from "~/components/Pagination";

export default function Orders() {
  const [size, setSize] = useState<number>(5);
  const [searchQuery, setSeachQuery] = useState("");
  const [page, setPage] = useState(0);
  const [viewSection, setViewSection] = useState(true);

  return (
    <div className="px-2 lg:pl-7 pt-5">
      <div className="w-full p-4 bg-[#695fdf] rounded-md">
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => setSize(parseInt(e.target.value))}
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
            value={size}
          >
            Add commentMore actions
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <input
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
            type="text"
            placeholder="search"
            onChange={(e) => setSeachQuery(e.target.value)}
            value={searchQuery}
          />
        </div>

        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left [#d0d2d6]">
            <div className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
              <div className=" flex justify-between items-center">
                <div className="py-3 w-[25%] font-bold">Order id</div>
                <div className="py-3 w-[13%] font-bold">Price</div>
                <div className="py-3 w-[18%] font-bold">Payment Status</div>
                <div className="py-3 w-[18%] font-bold">Order Status</div>
                <div className="py-3 w-[18%] font-bold">Action </div>
                <div className="py-3 w-[8%] font-bold">
                  <ArrowDown />
                </div>
              </div>
            </div>

            <div className="text-[#d0d2d6] ">
              <div className=" flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$654</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">
                  <Link to={`/order/details/${1234}`}>View</Link>
                </div>
                <div
                  className="py-3 w-[8%] font-medium"
                  onClick={() => setViewSection(!viewSection)}
                >
                  <ArrowDown />
                </div>
              </div>

              <div
                className={
                  viewSection
                    ? "block border-b border-slate-700 bg-[#8288ed] transition-all duration-300 ease-in"
                    : "hidden"
                }
              >
                <div className=" flex justify-start items-start border-b border-slate-700">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                    #376868678
                  </div>
                  <div className="py-3 w-[13%] font-medium">$954</div>
                  <div className="py-3 w-[18%] font-medium">Completed</div>
                  <div className="py-3 w-[18%] font-medium">Testing</div>
                </div>

                <div className=" flex justify-start items-start border-b border-slate-700">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                    #376868678
                  </div>
                  <div className="py-3 w-[13%] font-medium">$954</div>
                  <div className="py-3 w-[18%] font-medium">Completed</div>
                  <div className="py-3 w-[18%] font-medium">Testing</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full justify-end flex mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={page}
            showItems={5}
            perPage={size}
            totalItems={50}
            onPageChange={(page) => setPage(page)}
          />
        </div>
      </div>
    </div>
  );
}
