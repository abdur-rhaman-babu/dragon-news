import Header from "./../../components/Header/Header";
import NewsLetter from "./../../components/NewsLetter/NewsLetter";
import Navbar from "./../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import NavbarLeft from "./../../components/NavbarLeft/NavbarLeft";
import NavbarRight from "./../../components/NavbarRight/NavbarRight";
const Home = () => {
  return (
    <div> 
      <div className="fixed top-0 left-0 right-0 bg-white max-w-7xl mx-auto">
        <Header />
        <NewsLetter />
        <Navbar />
      </div>
      <main className="lg:flex justify-between max-w-7xl mx-auto my-5 mt-80">
        <div className="w-3/12 mx-auto">
          <NavbarLeft />
        </div>
        <div className="w-6/12 mx-auto">
          <Outlet />
        </div>
        <div className="w-3/12 mx-auto">
          <NavbarRight />
        </div>
      </main>
    </div>
  );
};

export default Home;
