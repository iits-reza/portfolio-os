import React from "react";
import "./TopHeader.css";
import TechIllustration from "/Illustration.png";
import * as motion from "motion/react-client";

function TopHeader() {
  return (
    <header className="w-full h-screen float-right p-[50px] pl-[100px] flex flex-row gap-[100px] ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="banner shadow-lg bg-surface w-full relative text-8xl p-9
      text-white bg-linear-to-r from-indigo-200 to-blue-200 h-[500px]
      rounded-4xl"
      >
        <img
          src={TechIllustration}
          className="absolute right-0 top-[50px] w-[600px]"
        />
        <div className=" rounded-full flex flex-col gap-4 text-6xl text-black ">
          <h1 className="text-5xl font-bold text-primary">Hey there</h1>
          <h2 className="text-4xl font-semibold">I'm John</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl text-gray-700">
              A Frontend &lt;Developer/&gt;
            </h3>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}
export default TopHeader;
