import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // registration process
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    } 

    //login process 
    const loginUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    //logout process 
    const logoutUser = () =>{
        setLoading(true);
        return signOut(auth);
    } 

    //onAuthStateChanged
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser=>{
         setUser(currentUser);
         console.log('Current user',currentUser);
         setLoading(false);
        })) 
        return ()=>{
           return unsubscribe();
        }
    },[])

    const info = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser
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