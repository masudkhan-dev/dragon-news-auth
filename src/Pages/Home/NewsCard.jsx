import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, author, total_view, title, image_url, details, rating } = news;

  console.log(news);

  return (
    <div className="my-10">
      <header className="flex justify-between items-center bg-[#F3F3F3]">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={author.img} />
            </div>
          </div>

          <div>
            <h2 className="text-[#403F3F] font-bold">{author.name}</h2>
            <p className="text-sm text-[#706F6F]"> {author.published_date} </p>
          </div>
        </div>

        <div className="flex items-center">
          <FaShareAlt />
          <FaRegBookmark />
        </div>
      </header>

      <main>
        <h2 className="text-xl font-bold"> {title} </h2>
        <img src={image_url} alt="" />
        <p>
          {" "}
          {details.length > 200 ? (
            <span> {details.slice(0, 200)} </span>
          ) : (
            <span> {details} </span>
          )}{" "}
        </p>

        <Link to={`/news/${_id}`}>
          <button className="btn btn-ghost text-[#FF8C47]">Read More</button>
        </Link>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <FaStar className="text-[#FF8C47]" />
              <FaStar className="text-[#FF8C47]" />
              <FaStar className="text-[#FF8C47]" />
              <FaStar className="text-[#FF8C47]" />
              <FaStar className="text-[#FF8C47]" />
            </div>
            <p> {rating.number} </p>
          </div>
          <div className="flex items-center gap-2">
            <FaEye />
            <p>{total_view}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsCard;
