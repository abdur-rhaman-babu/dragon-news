import { CiBookmark } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import NavbarRight from "../NavbarRight/NavbarRight";

const NewsDetail = ({ news }) => {
  const { image_url, author, details, title, rating, total_view, _id } = news;
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bg-white">
        <Header />
      </div>
     <div className="flex flex-col-reverse md:flex-row mt-44 w-11/12 mx-auto">
     <div className=" mx-auto lg:w-8/12 my-5 bg-white border border-gray-300 rounded-lg shadow-md p-4">
    
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

        
        <h2 className="text-lg font-bold mb-2">{title}</h2>

    
        <div className="mb-3">
          <img src={image_url} alt="Article" className="w-full rounded-lg" />
        </div>

      
        <p className="text-gray-500 text-sm mb-3">{details}</p>
        <Link to={`/news/${_id}`}>
          <button className="text-blue-600 font-semibold">Read More</button>
        </Link>

     
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
      <div className="lg:w-3/12 mx-auto">
        <NavbarRight />
      </div>
     </div>
    </div>
  );
};

export default NewsDetail;
