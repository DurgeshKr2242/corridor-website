import React from "react";

const TopHeader = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-center text-white bg-bgBlack ">
      <div className="w-full h-full flex items-center py-4  justify-between pl-[310px] pr-4">
        <p>
          <span className="font-medium">/Page</span>
          <span className="font-medium opacity-70"> / Default</span>
        </p>

        <div className="flex items-center justify-center gap-4"></div>
      </div>
    </div>
  );
};

export default TopHeader;
