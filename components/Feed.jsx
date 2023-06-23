"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import { BsCalendar2Date, BsEmojiSmile, BsListStars } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";

const Feed = () => {
  const { data: session } = useSession();
  const [tweet, setTweet] = useState();

  return (
    <div className="p-3 border-t border-b border-gray-200">
      <div className="flex items-center gap-3">
        <img
          src={session?.user?.image}
          alt="Profile Photo"
          className="w-[40px] rounded-full"
        />
        <input
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          type="text"
          placeholder="What is happening?!"
          className="text-sm placeholder:text-xl outline-none"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="ml-12 flex items-center gap-4 text-lg mt-4 text-blue-700">
          <HiOutlinePhotograph className="feed__icon" />
          <AiOutlineFileGif className="feed__icon" />
          <BsListStars className="feed__icon" />
          <BsEmojiSmile className="feed__icon" />
          <BsCalendar2Date className="feed__icon" />
          <BiLocationPlus className="feed__icon" />
        </div>
        <button
          disabled={!tweet.trim()}
          className="px-5 py-2 bg-blue-500 text-white rounded-full disabled:brightness-75"
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default Feed;
