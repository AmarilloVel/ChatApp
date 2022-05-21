import React,{ createContext,useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from "../utils/firebase";
const AuthContext = createContext();


const login = (email, pass, navigation)=> {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, "231214")
        .then((crendenciales)=>{
            navigation.reset({
                index: 0,
                routes: [{name: 'Chat'}],
              });
            console.log("cuenta Creada");        
            //const user = crendenciales.user;
            
            //Ingresamos el nuevo estado del usuario
            setUser(email);
        })
        .catch(error =>{
            console.log(error);
        })
}







export const AuthContextProvider = ({children}) =>{
    const [user,setUser] = useState(null);
    const opc = {
        useUser: [user,setUser],
    };
    


    return(
        <AuthContext.Provider value={opc}>
            {children}
        </AuthContext.Provider>
    );

}
export default AuthContext;



/*const AuthContext = createContext({
            //user,setUser [useState]
    useUser: [null,()=>{}],

})*/


/*const usrContext = createContext();

const AuthContext=({children}) => {
    const [user,setUser] = useState(null);
    const opc = {
        nombre : "ama",
    }
   
    //console.log(opc);
    return(
    
        <usrContext.Provider value={"ama"}>
            {children}
        </usrContext.Provider>
    
    )

}*/

