import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../components/Root/Root";
import NewsCategory from "./../components/NewsCategory/NewsCategory";
import Home from './../Pages/Home/Home';
import Login from "../components/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path:'/',
        element:<Home/>,
        children:[
          {
            path:'/',
            element: <Navigate to='/category/01'></Navigate>
          },

          {
            path: "/category/:id",
            element: <NewsCategory />,
            loader: ({ params }) =>
              fetch(
                `https://openapi.programming-hero.com/api/news/category/${params.id}`
              ),
          },
        ]
      },
      {
        path:'/login',
        element:<Login/>
      }
        
    ],
  },
]);
