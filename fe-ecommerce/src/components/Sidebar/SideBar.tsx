import { Link, useLocation } from "react-router";
import { getNavData } from "./data";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  showSideBar: boolean;
  setShowSideBar: Dispatch<SetStateAction<boolean>>;
}

export default function SideBar({ setShowSideBar, showSideBar }: Props) {
  const sideBarLinks = getNavData("admin");
  const { pathname } = useLocation();

  return (
    <>
      <div>
        <div
          onClick={() => setShowSideBar(!showSideBar)}
          className={`fixed duration-200 ${
            !showSideBar ? "invisible" : "visible"
          } w-screen h-screen bg-[#74a4ce80] top-0 left-0 z-10`}
        ></div>
        <div
          className={`w-[260px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/5%)] transition-all ${
            showSideBar ? "left-0" : "-left-[260px] lg:left-0"
          }`}
        >
          <div className="h-[70px] flex flex-col justify-center items-center">
            <Link to={"/"} className="h-[50px] w-[180px]">
              <img
                src="/public/images/logo.png"
                alt="logo.png"
                className="w-full h-full"
              />
            </Link>
          </div>

          <div className="px-[16px]">
            <ul>
              {sideBarLinks.map((nav) => {
                return (
                  <li key={nav.id}>
                    <Link
                      className={`flex items-center gap-2 p-2 shadow-indigo-500/50 duration-500 w-full mb-1 hover:pl-4 transition-all ${
                        pathname === nav.link
                          ? "bg-blue-600 text-white rounded-sm"
                          : "text-[#030811] font-bold"
                      }`}
                      to={nav.link}
                    >
                      <nav.icon className="w-[20px] h-[20px]" />
                      <span>{nav.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
