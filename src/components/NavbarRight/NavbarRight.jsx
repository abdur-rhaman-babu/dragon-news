import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavbarRight = () => {
  const {signInWithGoogle, setUser, signInWithGithub} = useContext(AuthContext)
  const handleSignInWithGoogle = () =>{
      signInWithGoogle()
      .then(result=>{
        const currentUser = result.user;
        console.log(result.user)
        setUser(currentUser)
      })
      .catch(error=>{
        alert('ERROR', error.message)
      })
  }

  const handleSignInWithGithub = () =>{
    signInWithGithub()
      .then(result=>{
        const currentUser = result.user;
        console.log(result.user)
        // setUser(currentUser)
      })
      .catch(error=>{
        alert('ERROR', error.message)
      })
  }


  return (
    <div className="space-y-3">
      <div onClick={handleSignInWithGoogle} className="flex items-center gap-2 border cursor-pointer py-3 px-2 justify-center rounded-2xl">
        <FcGoogle size={25} />
        <span className="font-bold">Login with google</span>
      </div>
      <div onClick={handleSignInWithGithub} className="flex items-center gap-2 border cursor-pointer py-3 px-2 justify-center rounded-2xl">
        <FaGithub size={25} />
        <span className="font-bold">Login with GitHub</span>
      </div>
    </div>
  );
};

export default NavbarRight;
