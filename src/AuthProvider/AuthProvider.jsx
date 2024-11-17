import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setLoading(true)
    return signOut(auth);
  };

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateProfileUser = (profile)=>{
    return updateProfile(auth.currentUser, profile)
  }

  const signInWithGoogle = () =>{
    return signInWithPopup(auth, googleProvider)
  }

  const signInWithGithub = () =>{
    return signInWithPopup(auth, githubProvider)
  }

  const authInfo = {
    user,
    setUser,
    createUser,
    logoutUser,
    loginUser,
    loading,
    updateProfileUser,
    signInWithGoogle,
    signInWithGithub
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if(currentuser){
        setUser(currentuser);
      }else{
        setUser(null)
      }
      setLoading(false)

    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
