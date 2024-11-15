import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Login = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-center min-h-screen">
        <form className="bg-white lg:w-2/5 lg:p-16 p-8 w-full">
          <h1 className="text-2xl font-bold mb-5 text-center">
            Login your account
          </h1>
          <div>
            <label className="font-semibold tex-xl py-4">Email Address</label>
            <div className="bg-base-200 py-3 my-3">
              <input
                className="bg-base-200 px-2"
                type="email"
                placeholder="enter your email"
              />
            </div>
            <label className="font-semibold tex-xl py-4">Password</label>
            <div className="bg-base-200 py-3 my-3">
              <input
                className="bg-base-200 px-2"
                type="password"
                placeholder="enter your password"
              />
            </div>
          </div>
          <button className="bg-black w-full py-3 text-white font-bold">
            Login
          </button>
          <p className="mt-3">
            Dont't have an accout?{" "}
            <span className="text-red-700">
              <Link to="/auth/register">Register</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
