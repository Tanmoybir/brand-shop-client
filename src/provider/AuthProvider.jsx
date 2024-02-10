import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {

    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)

const googleLogin = () => {
    setLoading(true)
    return signInWithPopup( auth,googleProvider)
}

// Sign Up
const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const signIn = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const profileUpdate = (name,photo) => {
    updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
}

const logOut = () => {
    setLoading(true)
    return signOut(auth)
}

useEffect(() => {
    onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser);
        setLoading(false);
    })

},[])

// console.log(user);
const authentication = {
    googleLogin,
    createUser,
    signIn,
    profileUpdate,
    logOut,
    user,
    loading
   
}



    return (
       <AuthContext.Provider value={authentication}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.object,
}