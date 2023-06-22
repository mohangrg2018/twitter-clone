import TopHead from "./TopHead";
import Feed from "./Feed";
import Post from "./Post";

const MainContent = () => {
  return (
    <div className="mt-3 border-r border-gray-200">
      {/* TOP SECTION */}
      <TopHead />

      {/* FEED SECTION */}
      <Feed />

      {/* POST SECTION */}
      <Post />
    </div>
  );
};

export default MainContent;
