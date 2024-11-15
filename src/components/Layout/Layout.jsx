import { CiBookmark } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";

const Layout = ({ news }) => {
  // console.log(news);
  const { image_url, author, details, title, rating, total_view } = news;
  return (
    <div className="max-w-lg mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-4">
      {/* Author and Date */}
      <div className="flex items-center mb-3 bg-base-300 p-2">
        <img
          src={author?.img}
          alt="Author Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <p className="font-semibold">{author?.name}</p>
          <p className="text-gray-500 text-sm">{author?.published_date}</p>
        </div>
        <button className="ml-auto text-gray-500 hover:text-gray-700">
          <div className="flex items-center gap-2 text-2xl">
          <CiBookmark />
          <GoShareAndroid />
          </div>
        </button>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold mb-2">{title}</h2>

      {/* Image */}
      <div className="mb-3">
        <img src={image_url} alt="Article" className="w-full rounded-lg" />
      </div>

      {/* Tags and Excerpt */}
      <p className="text-gray-500 text-sm mb-3">{details}</p>
      <a href="#" className="text-blue-600 font-semibold">
        Read More
      </a>

      {/* Rating and Views */}
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center text-yellow-500">
          <FaStar className="mr-1" />
          <FaStar className="mr-1" />
          <FaStar className="mr-1" />
          <FaStar className="mr-1" />
          <FaStar className="mr-1" />
          <span className="ml-2 text-gray-800">{rating.number}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <FaEye className="mr-1" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default Layout;
