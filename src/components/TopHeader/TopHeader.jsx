import React from "react";
import "./TopHeader.css";
import TechIllustration from "/Illustration.png";

function TopHeader() {
  return (
    <header className="w-full h-screen float-right p-[50px] pl-[100px] flex flex-row gap-[100px] ">
      <div className="banner w-full relative text-8xl p-9 text-white bg-linear-to-r from-indigo-200 to-blue-200 h-[500px] rounded-4xl">
        <img
          src={TechIllustration}
          className="absolute right-0 top-[50px] w-[600px]"
        />
        <div className=" rounded-full flex flex-col gap-4 text-6xl text-black ">
          <span className="">Hey there </span>
          <span className="">I'm Reza</span>A Frontend &lt;Developer/ &gt;
        </div>
      </div>
    </header>
  );
}
export default TopHeader;
