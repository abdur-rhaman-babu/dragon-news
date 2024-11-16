import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [exsist, setExsits] = useState("");
  const { createUser, setUser, updateProfileUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = new FormData(e.target);
    // const name = form.get("name");
    // const email = form.get("email");
    // const photo = form.get("photo");
    // const password = form.get('password')

    const name = e.target.name.value;
    if (name.length < 4) {
      setErrorMessage("Name al least must be 4 character");
      return;
    } else {
      setErrorMessage(" ");
    }
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setPassword(
        "At least one uppercase, one lowercase, one digit, one special character, at least 6 character are required"
      );
      return;
    }
    const photo = e.target.photo.value;
    console.log(email, password);

    const profile = {
      displayName: name,
      photoURL: photo,
    };

    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);
        updateProfileUser(profile)
        navigate("/");
        console.log(result.user);
      })
      .catch(() => {
        setExsits("User already exsist");
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white lg:w-2/5 lg:p-16 p-8">
        <h1 className="text-2xl font-bold mb-5 text-center">Register Now</h1>
        <div>
          <label className="font-semibold tex-xl py-4">Name</label>
          <div className="bg-base-200 py-3 my-3">
            <input
              className="bg-base-200 px-2 w-full"
              name="name"
              type="text"
              placeholder="enter your name"
            />
          </div>
          <div className="text-red-700 font-semibold">{errorMessage}</div>
          <label className="font-semibold tex-xl py-4">Photo URL</label>
          <div className="bg-base-200 py-3 my-3">
            <input
              className="bg-base-200 px-2 w-full"
              name="photo"
              type="text"
              placeholder="enter your photo url"
            />
          </div>
          <label className="font-semibold tex-xl py-4">Email Address</label>
          <div className="bg-base-200 py-3 my-3">
            <input
              className="bg-base-200 px-2 w-full"
              name="email"
              type="email"
              placeholder="enter your email"
            />
          </div>
          <label className="font-semibold tex-xl py-4">Password</label>
          <div className="bg-base-200 py-3 my-3">
            <input
              className="bg-base-200 px-2 w-full"
              name="password"
              type="password"
              placeholder="enter your password"
            />
          </div>

          {password ? (
            <div className="text-red-700 font-semibold">{password}</div>
          ) : exsist ? (
            <div className="text-red-700 font-semibold">{exsist}</div>
          ) : null}
        </div>
        <button className="bg-black w-full py-3 text-white font-bold">
          Register
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
