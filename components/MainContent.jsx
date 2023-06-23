import TopHead from "./TopHead";
import Feed from "./Feed";
import Posts from "./Posts";

const MainContent = () => {
  return (
    <div className="mt-3 border-r border-gray-200">
      {/* TOP SECTION */}
      <TopHead />

      {/* FEED SECTION */}
      <Feed />

      {/* POST SECTION */}
      <Posts />
    </div>
  );
};

export default MainContent;
