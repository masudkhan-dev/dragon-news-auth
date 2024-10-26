import {
  FaGithub,
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import qzone1 from "../../../../public/assets/qZone1.png";
import qzone2 from "../../../../public/assets/qZone2.png";
import qzone3 from "../../../../public/assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      {/* Login With  */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-4xl font-bold">Login With </h2>
        <button className="btn btn-outline btn-info w-full">
          <FaGoogle />
          Google
        </button>
        <button className="btn btn-outline btn-neutral w-full">
          <FaGithub />
          Github
        </button>
      </div>

      {/* Find Us On */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-4xl font-bold">Find Us On </h2>
        <Link
          to="/"
          className="p-4 flex items-center text-[#706F6F] font-poppins gap-x-2 border-t"
        >
          <button className="bg-[#F3F3F3] p-2 rounded-full">
            <FaFacebookF className="text-[#58A7DE]" />
          </button>
          Facebook
        </Link>
        <Link
          to="/"
          className="p-4 flex items-center text-[#706F6F] font-poppins gap-x-2 border-y"
        >
          <button className="bg-[#F3F3F3] p-2 rounded-full">
            <FaTwitter className="text-[#58A7DE]" />
          </button>
          Twitter
        </Link>
        <Link
          to="/"
          className="p-4 flex items-center text-[#706F6F] font-poppins gap-x-2 border-b"
        >
          <button className="bg-[#F3F3F3] p-2 rounded-full">
            <FaInstagram className="text-[#D82D7E]" />
          </button>
          Instagram
        </Link>
      </div>

      {/* Q zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-4xl font-bold">Q Zone </h2>

        <img src={qzone1} alt="q zone 1" />
        <img src={qzone2} alt="q zone 2" />
        <img src={qzone3} alt="q zone 3" />
      </div>
    </div>
  );
};

export default RightSideNav;
