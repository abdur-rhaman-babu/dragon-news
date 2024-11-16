import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if(loading){
    return <div className="flex items-center justify-center h-screen">
      <span className="loading loading-infinity loading-lg"></span>
    </div>
  }
  
  if(!user){
    return <Navigate to='/auth/login'></Navigate>
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
