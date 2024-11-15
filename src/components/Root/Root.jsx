import { Outlet } from "react-router-dom";
import Home from "../../Pages/Home/Home";

const Root = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Root;