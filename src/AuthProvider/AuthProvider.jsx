import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logoutUser = ()=>{
    return signOut(auth)
  }

  const authInfo = {
    user,
    setUser,
    createUser,
    logoutUser
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentuser=>{
        setUser(currentuser)

        return ()=>{
            unsubscribe()
        }
    })

  },[])
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
