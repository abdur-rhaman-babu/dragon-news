import { useLoaderData } from "react-router-dom";
import NewsDetail from "../NewsDetail/NewsDetail";

const NewsDetails = () => {
    const data = useLoaderData()
    // console.log(data.data)
    return (
        <div>
            {
                data.data.map(news=> <NewsDetail key={news._id} news={news}/>)
            }
        </div>
    );
};

export default NewsDetails;