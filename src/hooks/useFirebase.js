import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import auth from "../firebase.init"

const useFirebase = () =>{
    const [user, setUser] = useState({})



    const signInwithGoogleHandler = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        .then(result => {
            setUser(result.user)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    const signOutHandler = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .catch(error => {
            console.log(error)
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          });
    },[])

    return {user,signInwithGoogleHandler,signOutHandler}

}
export default useFirebase;