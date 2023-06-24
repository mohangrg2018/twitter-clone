"use client";

import { useEffect, useState } from "react";
import Post from "./Post";
import { db } from "@/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "tweets"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [db]);

  return (
    <div className="mb-20">
      {posts.map((post) => (
        <div key={post.id}>
          <Post
            userImg={post.data().ProfileImg}
            username={post.data().name}
            caption={post.data().caption}
            postImg={post.data().image}
          />
        </div>
      ))}
    </div>
  );
};

export default Posts;
