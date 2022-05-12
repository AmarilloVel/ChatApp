import React,{useState} from "react";
import {StyleSheet, View,SafeAreaView,StatusBar} from "react-native";
import Chat from "./src/screens/Chat";
import Login from "./src/screens/Login";
import LogStack from "./src/navigation/LogStack";
//import UserProvider from "./src/utils/UserContext";
import AuthContext from "./src/utils/authContext";
import ChatMenu from "./src/screens/ChatMenu";
import MenuChat from "./src/screens/MenuChat";


export default function App(){
  const [user,setUser] = useState(null); 
 
  const data ={
    useUser:[user,setUser],
  }

  return(
    <>

        <AuthContext.Provider value={data}>
          <View style={styles.container}>
            {/* ! user ? (<LogStack setUser={setUser}/>) : (<Chat setUser={user} usuario={user}/>)*/ }
            { ! user ? (<LogStack />) : (<Chat />) }
          </View>
        </AuthContext.Provider>

        
 
    
    </>
    
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#1b2734",
  },
});
