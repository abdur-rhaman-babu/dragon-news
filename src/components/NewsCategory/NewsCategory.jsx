import { useLoaderData, useParams } from "react-router-dom";
import Layout from "./../Layout/Layout";
const NewsCategory = () => {
  const data = useLoaderData();
  //    console.log('data',data.data)

  return (
    <div>
      <div className="flex flex-col gap-5">
        {data.data.map((news) => (
          <Layout key={news._id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default NewsCategory;
