import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/config';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        // setLoading(true);
        // return 'hhhhhhhhhhhh';
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // const signIn = (email, password) => {
    //     setLoading(true);
    //     return signInWithEmailAndPassword(auth, email, password);
    // }

    // const logOut = () => {
    //     return signOut(auth);
    // }

    // observer user auth state 
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser);
    //         setLoading(false);
    //     });

    //     // stop observing while unmounting 
    //     return () => {
    //         return unsubscribe();
    //     }
    // }, [])

    const authInfo = {
        createUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;