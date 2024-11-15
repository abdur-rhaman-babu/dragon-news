import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const NavbarRight = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 border cursor-pointer py-3 px-2 justify-center rounded-2xl">
        <FcGoogle size={25} />
        <span className="font-bold">Login with google</span>
      </div>
      <div className="flex items-center gap-2 border cursor-pointer py-3 px-2 justify-center rounded-2xl">
        <FaGithub size={25} />
        <span className="font-bold">Login with google</span>
      </div>
    </div>
  );
};

export default NavbarRight;
