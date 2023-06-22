"use client";

import { useSession } from "next-auth/react";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import { BsCalendar2Date, BsEmojiSmile, BsListStars } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";

const Feed = () => {
  const { data: session } = useSession();
  return (
    <div className="p-3 border-t border-b border-gray-200">
      <div className="flex items-center gap-3">
        <img
          src={session?.user?.image}
          alt="Profile Photo"
          className="w-[40px] rounded-full"
        />
        <input
          type="text"
          placeholder="What is happening?!"
          className="text-xl outline-none"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="ml-12 flex items-center gap-3 text-lg mt-4 text-blue-700">
          <HiOutlinePhotograph />
          <AiOutlineFileGif />
          <BsListStars />
          <BsEmojiSmile />
          <BsCalendar2Date />
          <BiLocationPlus />
        </div>
        <button className="px-5 py-2 bg-blue-500 text-white rounded-full">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default Feed;
