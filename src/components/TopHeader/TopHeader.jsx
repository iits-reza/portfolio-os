import React from "react";
import "./TopHeader.css";
import TechIllustration from "/Illustration.png";

function TopHeader() {
  return (
    <header className="w-full h-screen float-right p-[50px] pl-[100px] flex flex-row gap-[100px] align-middle content-center items-center justify-items-center">
      <div className="mask-shape w-[200px] h-[300px] rounded-full text-4xl text-white bg-[#9A82DB] ml-[50px] flex flex-col justify-center items-center rotate-[45deg]">
        <span className="rotate-[-45deg]">Hey there </span>
        <br />
        <span className="rotate-[-45deg]">I'm Reza</span>
      </div>
      <div className="banner  relative text-8xl p-9 text-white bg-linear-to-r from-indigo-200 to-blue-200 h-[400px] w-3/4 rounded-4xl">
        <img
          src={TechIllustration}
          className="absolute right-[-100px] top-[-50px] w-[700px]"
        />
        A
        <br />
        Frontend
        <br />
        &lt;Developer/ &gt;
      </div>
    </header>
  );
}
export default TopHeader;
