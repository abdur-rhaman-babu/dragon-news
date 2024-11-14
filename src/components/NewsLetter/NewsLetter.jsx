import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <div className="flex items-center gap-4 p-4 bg-base-300">
      <button className="bg-red-700 px-5 py-2 text-white font-bold">Latest</button>
      <Marquee>
       <Link> I can be a React component, multiple React components, or just some
       text.</Link>
       <Link> I can be a React component, multiple React components, or just some
       text.</Link>
       <Link> I can be a React component, multiple React components, or just some
       text.</Link>
      </Marquee>
    </div>
  );
};

export default NewsLetter;
