import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex items-center">
      <button className="btn btn-info">Breaking News</button>

      <Marquee pauseOnHover={true} speed={100}>
        <Link to="/">
          I can be a React component, multiple React components....
        </Link>
        <Link to="/">
          I can be a React component, multiple React components....
        </Link>
        <Link to="/">
          I can be a React component, multiple React components....
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
