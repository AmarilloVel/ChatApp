import React,{ createContext,useState } from "react";



const AuthContext = createContext({
            //user,setUser [useState]
    useUser: [null,()=>{}],

})


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

export default AuthContext;