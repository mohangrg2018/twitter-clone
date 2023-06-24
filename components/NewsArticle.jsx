import React from "react";

const NewsArticle = ({ title, img }) => {
  return (
    <div className="flex items-center gap-4 mb-4">
      <p>{title}</p>
      <img src={img} alt="thumbnail" className="w-[80px] rounded-md" />
    </div>
  );
};

export default NewsArticle;
