import React from "react";
import DarkModeSwitch from "../UI/DarkModeSwitch";

const MainPageWrapper = ({ children, header = "unrecognised" }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full min-h-screen pr-4 text-white bg-bgBlackSec">
      <div className="w-full flex items-center py-3 text-white bg-bgBlack justify-between pl-[310px] pr-4">
        <p className="">
          <span className="font-medium opacity-70">/fpdoc</span>
          <span className="text-lg font-medium"> /{header}</span>
        </p>

        <div className="flex items-center justify-center gap-4">
          <DarkModeSwitch />
        </div>
      </div>
      <div className="w-full h-full  pt-[32px] pl-[325px]">{children}</div>
    </div>
  );
};

export default MainPageWrapper;
