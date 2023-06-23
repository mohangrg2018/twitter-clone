import {
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineUpload,
} from "react-icons/ai";
import { BsGraphDownArrow, BsRecycle, BsThreeDots } from "react-icons/bs";

const Post = ({ userImg, username, caption, postImg }) => {
  return (
    <div className="p-3 grid grid-cols-[50px,1fr] border-b border-gray-200">
      <div>
        <img
          src={userImg}
          alt="Profile Photo"
          className="w-[40px] rounded-full"
        />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <p>{username}</p>
            <p>{caption}</p>
          </div>
          <BsThreeDots />
        </div>
        <img src={postImg} alt="Post Photo" className="rounded-xl mt-5" />
        <div className="flex items-center text-xl gap-16 mt-3">
          <AiOutlineMessage />
          <BsRecycle />
          <AiOutlineHeart />
          <BsGraphDownArrow />
          <AiOutlineUpload />
        </div>
      </div>
    </div>
  );
};

export default Post;
