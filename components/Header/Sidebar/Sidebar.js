import React from "react";
import Input from "/components/UI/Input";
import { HiHome } from "react-icons/hi";
import { IoCreate } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { useRouter } from "next/router";
const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="absolute p-6 top-[98px] bottom-12 left-8 w-[270px] rounded-2xl flex flex-col items-center justify-start bg-bgBlack text-white shadow-lg gap-10">
      <div className="">
        <p className="text-3xl font-bold text-center">FP Doc</p>
      </div>
      <div className="flex flex-col items-start justify-start w-full gap-4 font-semibold text- text-White">
        <button
          onClick={() => router.push("/")}
          className="flex items-center w-full gap-3 px-4 py-3 text-left text-white capitalize cursor-pointer rounded-standard/2 bg-Blue"
        >
          <p className="text-xl">
            <HiHome />
          </p>
          <p>Home</p>
        </button>
        <button
          onClick={() => router.push("/create")}
          className="flex items-center w-full gap-3 px-4 py-3 text-left capitalize cursor-pointer hover:bg-Blue/40 rounded-standard/2 "
        >
          <p className="text-xl">
            <IoCreate />
          </p>
          <p>Create</p>
        </button>

        <button
          onClick={() => router.push("/")}
          className="flex items-center w-full gap-3 px-4 py-3 text-left capitalize cursor-pointer hover:bg-Blue/40 rounded-standard/2 "
        >
          <p className="text-xl">
            <MdHistory />
          </p>
          <p>History</p>
        </button>
        {/* <Input /> */}
      </div>
    </div>
  );
};

export default Sidebar;
