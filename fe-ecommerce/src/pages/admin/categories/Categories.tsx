import { CircleX, Edit, Image, Trash } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import Button from "~/components/Button";
import Pagination from "~/components/Pagination";

const Categories = () => {
  const [perpage, setPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-[#6a5fdf] rounded-md">
        <h1 className="text-[#d0d2d6] font-semibold text-lg  text-center ">
          Category
        </h1>
        <Button
          className="bg-[#483AA0] text-white hover:shadow-red-500/40 cursor-pointer rounded-sm text-sm"
          onClick={() => setShow(!show)}
        >
          Add
        </Button>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-7/12">
          <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
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
                perPage={perpage}
                onPageChange={(e) => setCurrentPage(e)}
                pageNumber={currentPage}
                showItems={5}
                totalItems={50}
              />
            </div>
          </div>
        </div>

        <div
          className={`w-[320px]  lg:w-5/12 lg:relative lg:right-0 fixed ${
            show ? "right-0" : "-right-[340px]"
          } z-[9] top-0 transition-all duration-500 `}
        >
          <div className="pl-5 w-full h-full">
            <div className="bg-[#6a5fdf] h-screen lg:h-full px-3 py-2 lg:rounded-md text-[#d0d2d6]">
              <h1 className="text-[#d0d2d6] font-semibold text-xl my-4 w-full text-center flex items-center justify-between">
                <span>Add Category</span>{" "}
                <CircleX
                  onClick={() => setShow(false)}
                  className="visible lg:hidden"
                />
              </h1>

              <form>
                <div className="flex flex-col w-full gap-1 mb-3">
                  <label htmlFor="name"> Category Name</label>
                  <input
                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#ffffff] border border-slate-700 rounded-md text-[#000]"
                    type="text"
                    id="name"
                    name="category_name"
                    placeholder="Category Name"
                  />
                </div>

                <label
                  className="flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-indigo-500 w-full border-[#d0d2d6]"
                  htmlFor="image"
                >
                  <Image />
                  <span>Slect Image</span>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="hidden"
                  />
                </label>

                <Button className="bg-[salmon] text-white hover:shadow-red-500/40 w-full rounded-md px-7 py-2 my-2">
                  Add Category
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
