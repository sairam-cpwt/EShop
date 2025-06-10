import { Edit, Trash } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import Pagination from "~/components/Pagination";
import Search from "~/components/Search";
import Select from "~/components/Select";

export default function AllProducts() {
  const [searchVal, setSearchVal] = useState<string>("");

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        <div className="flex justify-between items-center">
          <Select
            options={[
              { id: 5, value: 5 },
              { id: 10, value: 10 },
              { id: 15, value: 15 },
            ]}
          />
          <Search
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </div>

        <div className="relative overflow-x-auto">
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
                      <div className="flex justify-start items-center gap-4">
                        <Link
                          to="#"
                          className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50"
                        >
                          {" "}
                          <Edit />{" "}
                        </Link>
                        <Link
                          to="#"
                          className="p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50"
                        >
                          {" "}
                          <Trash />{" "}
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            perPage={5}
            onPageChange={(e) => {
              console.log(e);
            }}
            pageNumber={1}
            showItems={5}
            totalItems={50}
          />
        </div>
      </div>
    </div>
  );
}
