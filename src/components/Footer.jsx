import React from "react";
import CenterMenu from "./CenterMenu";
import { Facebook, Twitter, YouTube, LinkedIn } from "@material-ui/icons";

function Footer() {
  const SocialStyle =
    "rounded-full border-2 border-whit p-2 mr-[5rem] hover:border-slate-900 ";
  console.log(SocialStyle);
  return (
    <div className=" footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[35rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <div class="flex justify-center mt-6 mb-5">
        <div class="bg-white rounded-lg">
          <div class="flex flex-wrap justify-between md:flex-row">
            <input
              type="email"
              class="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none"
              placeholder="Enter your email"
            />
            <button class="w-full m-1 p-2 text-sm bg-gray-800 rounded-lg font-semibold uppercase lg:w-auto">
              subscribe
            </button>
          </div>
        </div>
      </div>
      <CenterMenu />
      {/* Social icons */}
      <div className="flex w-[100%] justify-center mt-12">
        <div className={SocialStyle}>
          <Facebook />
        </div>{" "}
        <div className={SocialStyle}>
          <Twitter />
        </div>{" "}
        <div className={SocialStyle}>
          <YouTube />
        </div>{" "}
        <div className={SocialStyle}>
          <LinkedIn />
        </div>
      </div>
      {/* detail */}
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </span>
    </div>
  );
}

export default Footer;
