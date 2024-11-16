import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { loginUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        const currentuser = result.user;
        setUser(currentuser);
        navigate("/");
      })
      .catch(() => {
        setErrorMessage('Invalid email or password')
      });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white lg:w-2/5 lg:p-16 p-8 w-full"
        >
          <h1 className="text-2xl font-bold mb-5 text-center">
            Login your account
          </h1>
          <div>
            <label className="font-semibold tex-xl py-4">Email Address</label>
            <div className="bg-base-200 py-3 my-3">
              <input
                className="bg-base-200 px-2"
                name="email"
                type="email"
                placeholder="enter your email"
              />
            </div>
            <label className="font-semibold tex-xl py-4">Password</label>
            <div className="bg-base-200 py-3 my-3">
              <input
                className="bg-base-200 px-2"
                name="password"
                type="password"
                placeholder="enter your password"
              />
            </div>
            <div className="text-red-700 font-semibold">{errorMessage}</div>
          </div>
          <button className="bg-black w-full py-3 text-white font-bold">
            Login
          </button>
          <button className="hover:underline text-violet-700 font-semibold">Forget password</button>
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
