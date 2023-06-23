import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const RightSidebar = () => {
  return (
    <div className="ml-20 pt-3 z-10">
      <div className="w-full flex items-center justify-center gap-4 p-3 bg-gray-200 rounded-full sticky top-0">
        <AiOutlineSearch className="text-xl" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="placeholder:text-sm outline-none bg-transparent"
        />
      </div>
    </div>
  );
};

export default RightSidebar;
