import React from "react";

const TopHead = () => {
  return (
    <div className="flex flex-col gap-5 sticky top-0 backdrop-blur-md">
      <h1 className="font-bold text-2xl px-3">Home</h1>
      <div className="grid grid-cols-2 text-center">
        <h2 className="hover:bg-gray-200 p-3 cursor-pointer">For you</h2>
        <h2 className="hover:bg-gray-200 p-3 cursor-pointer">Following</h2>
      </div>
    </div>
  );
};

export default TopHead;
