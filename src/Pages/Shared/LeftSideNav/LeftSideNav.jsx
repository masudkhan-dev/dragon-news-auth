import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("categories.json");
        const data = res.data;
        setCategories(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-start font-poppins">
      <h2 className="text-2xl font-bold btn w-full">National News</h2>

      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.id}`}
          className=" text-[#9F9F9F]  btn btn-sm btn-ghost w-full justify-start pl-10"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
