import { List } from "lucide-react";
import type { Dispatch } from "react";

interface Props {
  showSideBar: boolean;
  setShowSideBar: Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ showSideBar, setShowSideBar }: Props) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40">
        <div className="ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-[#b1addf] px-5 transition-all">
          <div
            onClick={() => setShowSideBar(!showSideBar)}
            className="w-[35px] flex lg:hidden h-[35px] rounded-sm bg-indigo-500 shadow-lg  hover:shadow-indigo-500/50 justify-center items-center cursor-pointer"
          >
            <span>
              <List />
            </span>
          </div>

          <div className="hidden md:block w-full">
            <div className="flex items-center justify-between">
              <input
                type="text"
                className="px-3 py-2 outline border bg-transparent border-slate-700 rounded-md text-[#cdca9] focus:border-indigo-500 overflow-hidden"
                name="searchQuery"
                placeholder="Search Your Query"
              />

              <div className="flex justify-center items-center gap-8 relative">
                <div className="flex justify-center items-center flex-col text-end">
                  <h2 className="text-md font-bold">Sairam gudiputi</h2>
                  <span className="text-[14px] w-full font-normal">Admin</span>
                </div>

                <img
                  src={"/public/images/admin.png"}
                  alt="User Profile"
                  className="w-[45px] h-[45px] rounded-full overflow-hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
