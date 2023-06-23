"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  // const { data: session } = useSession();

  const posts = [
    {
      id: "1",
      userImg:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      name: "Mohan",
      caption: "hello there",
      postImg:
        "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: "2",
      userImg:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80",
      name: "Hari",
      caption: "hello there",
      postImg:
        "https://images.unsplash.com/photo-1431440869543-efaf3388c585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
  ];

  return (
    <div className="mb-20">
      {posts.map((post) => (
        <Post
          key={post.id}
          userImg={post.userImg}
          username={post.name}
          caption={post.caption}
          postImg={post.postImg}
        />
      ))}
    </div>
  );
};

export default Posts;
