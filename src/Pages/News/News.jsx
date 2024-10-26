import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
  return (
    <div>
      <Header />
      <Navbar/>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-3">
          <h2>Welcome to News Page. </h2>
        </div>
        <div className="col-span-1">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default News;
