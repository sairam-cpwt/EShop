import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "~/components/Sidebar/SideBar";
import { useState } from "react";

export default function MainLayout() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <div className="bg-[#cdcae9] w-full min-h-screen">
        <Header setShowSideBar={setShowSideBar} showSideBar={showSideBar} />

        <SideBar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />

        <div className="m-0 lg:ml-[260px] pt-[95px] transition-all">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
}
