import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if(!user){
    return <Navigate to='/auth/login'></Navigate>
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
