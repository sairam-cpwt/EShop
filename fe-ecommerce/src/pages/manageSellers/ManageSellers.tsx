import { Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import Pagination from "~/components/Pagination";

export default function ManageSellers() {
  const [perpage, setPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="px-2 lg:px-7 pt-5">
      <h2 className="text-[20px] font-bold mb-3">Manage Sellers</h2>
      <div className="bg-[#6a5fdf] rounded-md p-4">
        <div className="w-full bg-[#6a5fdf] rounded-md">
          <div className="flex justify-between items-center">
            <select
              onChange={(e) => setPerPage(parseInt(e.target.value))}
              className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            <input
              className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
              type="text"
              placeholder="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        <table className="w-full text-sm text-left text-[#d0d2d6]">
          <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
            <tr>
              <th scope="col" className="py-3 px-4">
                No
              </th>
              <th scope="col" className="py-3 px-4">
                Image
              </th>
              <th scope="col" className="py-3 px-4">
                Name
              </th>
              <th scope="col" className="py-3 px-4">
                Email
              </th>
              <th scope="col" className="py-3 px-4">
                Payment Status
              </th>

              <th scope="col" className="py-3 px-4">
                Status
              </th>
              <th scope="col" className="py-3 px-4">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4, 5].map((d, i) => {
              return (
                <tr key={i}>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    {d}
                  </td>

                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <img
                      className="w-[45px] h-[45px]"
                      src={`/images/categories/${d}.jpg`}
                      alt={d.toString()}
                    />
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    Tshirt
                  </td>

                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    test@test.com
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    Success
                  </td>

                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>

                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <div className="flex justify-start items-center gap-4">
                      <Link
                        to="#"
                        className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50"
                      >
                        <Eye />
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            perPage={perpage}
            onPageChange={(e) => setCurrentPage(e)}
            pageNumber={currentPage}
            showItems={5}
            totalItems={50}
          />
        </div>
      </div>
    </div>
  );
}
