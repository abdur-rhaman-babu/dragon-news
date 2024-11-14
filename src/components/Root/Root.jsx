import Header from "../Header/Header";
import MainLayout from "../MainLayout/MainLayout";
import Navbar from "../Navbar/Navbar";
import NewsLetter from "../NewsLetter/NewsLetter";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto font-poppins">
            <Header/>
            <NewsLetter/>
            <Navbar/>
            <MainLayout/>
        </div>
    );
};

export default Root;