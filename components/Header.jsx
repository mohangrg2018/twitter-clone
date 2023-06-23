"use client";

import Link from "next/link";
import React from "react";
import {
  AiFillHome,
  AiOutlineBell,
  AiOutlineMail,
  AiOutlineSearch,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  HiOutlineClipboardList,
  HiOutlineDotsCircleHorizontal,
} from "react-icons/hi";
import { BsBookmark } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import { signIn, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <section className="h-screen sticky top-0 flex flex-col gap-8 pt-3 border-r border-gray-200">
        <Link href="/">
          <AiOutlineTwitter className="text-4xl" />
        </Link>
        <div className="flex flex-col gap-5">
          <Link href="/" className="nav__link">
            <AiFillHome className="nav__icon" />
            <h2>Home</h2>
          </Link>
          <Link href="/" className="nav__link">
            <AiOutlineSearch className="nav__icon" />
            <h2>Explore</h2>
          </Link>
          <Link href="/" className="nav__link">
            <AiOutlineBell className="nav__icon" />
            <h2>Notifications</h2>
          </Link>
          <Link href="/" className="nav__link">
            <AiOutlineMail className="nav__icon" />
            <h2>Messages</h2>
          </Link>
          <Link href="/" className="nav__link">
            <HiOutlineClipboardList className="nav__icon" />
            <h2>Lists</h2>
          </Link>
          <Link href="/" className="nav__link">
            <BsBookmark className="nav__icon" />
            <h2>Bookmarks</h2>
          </Link>
          <Link href="/" className="nav__link">
            <GoVerified className="nav__icon" />
            <h2>Verified</h2>
          </Link>
          <Link href="/" className="nav__link">
            <BiUser className="nav__icon" />
            <h2>Profile</h2>
          </Link>
          <Link href="/" className="nav__link">
            <HiOutlineDotsCircleHorizontal className="nav__icon" />
            <h2>More</h2>
          </Link>
        </div>
        <button className="bg-blue-500 w-[90%] py-3 text-white rounded-full">
          Tweet
        </button>
        <div
          onClick={() => {}}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={session?.user?.image}
            alt="Profile Photo"
            className="w-[40px] rounded-full"
          />
          <p className="text-sm">{session?.user?.name}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="absolute top-40  left-[50%] translate-x-[-50%] flex flex-col items-center gap-8">
      <img src="/twitter.png" alt="Logo" className="w-[100px]" />
      <p>This app is for educational purpose only</p>
      <button
        type="button"
        onClick={() => signIn()}
        className="px-7 py-3 bg-blue-500 text-white rounded-md"
      >
        Login
      </button>
    </section>
  );
};

export default Header;
