import Header from "../Header/Header";
import NewsLetter from "../NewsLetter/NewsLetter";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Header/>
            <NewsLetter/>
        </div>
    );
};

export default MainLayout;