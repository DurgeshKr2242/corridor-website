import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const CreateHeader = ({ isDocVisible = false, setIsDocVisible }) => {
  return (
    <div className="flex items-center justify-between w-full mb-4">
      <div>
        <p className="text-xl font-medium ">Create Doc.</p>
        <p className="text-sm text-White/40">
          Create your MRM Document quickly and efficiently
        </p>
      </div>
      <div>
        <button
          onClick={() => setIsDocVisible(!isDocVisible)}
          className="flex items-center justify-center gap-1 px-5 py-1 font-medium text-white group bg-Blue rounded-standard/4"
        >
          {isDocVisible ? "Go back to editor" : "View doc"}

          <HiOutlineArrowNarrowRight className="text-lg transition-all duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default CreateHeader;
