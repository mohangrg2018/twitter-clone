import React from "react";

const Follow = ({ name, img }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <img src={img} alt="Profile photo" className="w-[40px] rounded-full" />
        <p>{name}</p>
      </div>
      <button
        type="button"
        className="bg-white px-4 py-1 rounded-full text-sm font-medium"
      >
        Follow
      </button>
    </div>
  );
};

export default Follow;
