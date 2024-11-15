import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="bg-white lg:w-2/5 lg:p-16 p-8">
        <h1 className="text-2xl font-bold mb-5 text-center">
          Register Now
        </h1>
        <div>
          <label className="font-semibold tex-xl py-4">Name</label>
          <div className="bg-base-200 py-3 my-3">
            <input
              className="bg-base-200 px-2"
              type="text"
              placeholder="enter your name"
            />
          </div>
          <label className="font-semibold tex-xl py-4">Photo URL</label>
          <div className="bg-base-200 py-3 my-3">
            <input
              className="bg-base-200 px-2"
              type="text"
              placeholder="enter your photo url"
            />
          </div>
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
          Already have an accout?{" "}
          <span className="text-red-700">
            <Link to="/auth/login">Login</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
