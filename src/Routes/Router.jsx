import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../components/Root/Root";
import NewsCategory from "./../components/NewsCategory/NewsCategory";
import Home from "./../Pages/Home/Home";
import Login from "../components/Login/Login";
import NewsDetails from "../components/NewsDetails/NewsDetails";
import Register from "../components/Register/Register";
import AuthLayout from "../components/AuthLayout/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Navigate to="/category/01"></Navigate>,
          },

          {
            path: "/category/:id",
            element: <NewsCategory />,
            loader: ({ params }) =>
              fetch(
                `https://openapi.programming-hero.com/api/news/category/${params.id}`
              ),
          },
        ],
      },
      {
        path:'/auth',
        element:<AuthLayout/>,
        children:[
          {
            path: "/auth/login",
            element: <Login />,
          },
          {
            path:'/auth/register',
            element:<Register/>
          },
        ]
      },
      
      {
        path: "/news/:id",
        element: <NewsDetails />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/${params.id}`
          ),
      },
      
    ],
  },
]);
