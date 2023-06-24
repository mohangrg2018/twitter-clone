"use client";

import { useEffect, useState } from "react";
import NewsArticle from "./NewsArticle";

const News = () => {
  const [news, setNews] = useState([]);
  const [articleNum, setArticleNum] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://saurav.tech/NewsAPI/top-headlines/category/health/us.json"
      );
      const data = await res.json();
      setNews(data.articles);
    };
    fetchData();
  }, []);
  return (
    <div className="my-10 bg-gray-100 p-4 rounded-lg">
      <h1 className="font-bold mb-5">Trends for you</h1>
      {news.slice(0, articleNum).map((newItem, index) => (
        <div key={index}>
          <NewsArticle title={newItem.title} img={newItem.urlToImage} />
        </div>
      ))}
      <button
        type="button"
        onClick={() => setArticleNum(articleNum + 3)}
        className="text-blue-600"
      >
        Show more
      </button>
    </div>
  );
};

export default News;
