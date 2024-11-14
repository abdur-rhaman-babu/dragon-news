import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>
    }
])