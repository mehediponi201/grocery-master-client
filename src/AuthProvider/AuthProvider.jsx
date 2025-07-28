import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // registration process
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login process 
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update users's profile 
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // signin with google
    const signInwithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //logout process 
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    //onAuthStateChanged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser => {
            setUser(currentUser);
            console.log('Current user', currentUser);
            setLoading(false);
        }))
        return () => {
            return unsubscribe();
        }
    }, [])

    const info = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        updateUserProfile,
        signInwithGoogle

    };
    return (
        <AuthContext.Provider value={info}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;



//onAuthStateChanged(Manage User)
// useEffect(()=>{
//     const unsubscribe = onAuthStateChanged(auth,(currentUser =>{
//         setUser(currentUser);
//         console.log('Current user',currentUser);
//         setLoading(false);
//     }))
//     return ()=>{
//         return unsubscribe();
//     }
// },[])