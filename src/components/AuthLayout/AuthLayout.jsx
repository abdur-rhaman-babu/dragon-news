import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-base-200">
      <div>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
