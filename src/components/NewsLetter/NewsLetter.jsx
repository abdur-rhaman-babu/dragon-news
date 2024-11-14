import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <div className="flex items-center gap-4 p-4 bg-base-300">
      <button className="bg-red-700 px-5 py-2 text-white font-bold">Latest</button>
      <Marquee pauseOnHover={true} speed={50}>
       <Link className="text-xl"> I can be a React component, multiple React components, or just some
       text.</Link>
       <Link className="text-xl"> I can be a React component, multiple React components, or just some
       text.</Link>
       <Link className="text-xl"> I can be a React component, multiple React components, or just some
       text.</Link>
      </Marquee>
    </div>
  );
};

export default NewsLetter;
