import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();


  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-4">
        <div>
          <LeftSideNav />
        </div>

        {/* news container */}
        <div className="md:col-span-2 gap-y-5">
          {news.map((aNews) => (
            <NewsCard key={aNews._id} news={aNews} />
          ))}
        </div>
        <div className="border">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
