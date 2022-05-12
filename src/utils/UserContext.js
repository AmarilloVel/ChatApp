
import React, {useState, createContext} from "react";




/*const login = (data) => {
    return data;
}*/




/*const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const options={
        useUser: [user,setUser]
    }
    //console.log(options);
    //console.log({children});
    return (
        <UserContext.Provider value={options}>
            {children}
        </UserContext.Provider>
    );
}
*/
const UserContext = React.createContext();
function UserProvider ({children})  {
    const [user, setUser] = useState(null);

    const userOptions = {
    useUser: [user,setUser]

} 
    return (
        <UserContext.Provider value={null}>
            {children}
        </UserContext.Provider>
    )
}



console.log(UserProvider.value);
export default UserProvider;

