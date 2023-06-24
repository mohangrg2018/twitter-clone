"use client";

import { db } from "@/firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "firebase/storage";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import { BsCalendar2Date, BsEmojiSmile, BsListStars } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";

const Feed = () => {
  const { data: session } = useSession();
  const [tweet, setTweet] = useState("");
  const [image, setImage] = useState(null);

  const tweetInputRef = useRef(null);
  const filePickerRef = useRef(null);

  //Upload Files
  const handleFilePickerChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage(reader.result);
    };
  };

  //ADDING TWEET TO FIRESTORE
  const handleSubmitTweet = async () => {
    const docRef = await addDoc(collection(db, "tweets"), {
      name: session?.user?.name,
      ProfileImg: session?.user?.image,
      caption: tweetInputRef.current.value,
      timestamp: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);

    const storage = getStorage();
    const imagesRef = ref(storage, `tweets/${docRef.id}/image`);

    if (image) {
      await uploadString(imagesRef, image, "data_url").then(
        async (snapshot) => {
          const downloadURL = await getDownloadURL(imagesRef);

          await updateDoc(doc(db, "tweets", docRef.id), {
            image: downloadURL,
          });
        }
      );
    }

    setImage(null);
    setTweet("");
  };

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
          ref={tweetInputRef}
          onChange={(e) => setTweet(e.target.value)}
          type="text"
          placeholder="What is happening?!"
          className="text-sm placeholder:text-xl outline-none"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="ml-12 flex items-center gap-4 text-lg mt-4 text-blue-700">
          <HiOutlinePhotograph
            className="feed__icon cursor-pointer"
            onClick={() => filePickerRef.current.click()}
          />
          <input
            type="file"
            className="hidden"
            ref={filePickerRef}
            onChange={handleFilePickerChange}
          />
          <AiOutlineFileGif className="feed__icon" />
          <BsListStars className="feed__icon" />
          <BsEmojiSmile className="feed__icon" />
          <BsCalendar2Date className="feed__icon" />
          <BiLocationPlus className="feed__icon" />
        </div>
        <button
          disabled={!tweet || !tweet.trim()}
          onClick={handleSubmitTweet}
          className="px-5 py-2 bg-blue-500 text-white rounded-full disabled:brightness-75"
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default Feed;
