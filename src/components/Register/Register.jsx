import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = new FormData(e.target);
    // const name = form.get("name");
    // const email = form.get("email");
    // const photo = form.get("photo");
    // const password = form.get('password')
    
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value  
    const photo = e.target.photo.value
    console.log(email, password)

    createUser(email, password) 
    .then(result=>{
        const newUser = result.user;
        setUser(newUser)
        console.log(result.user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
    navigate('/')
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
