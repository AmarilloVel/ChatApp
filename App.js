import React,{useState} from "react";
import {StyleSheet, View,SafeAreaView,StatusBar} from "react-native";
import Chat from "./src/screens/Chat";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import LogStack from "./src/navigation/LogStack";
//import UserProvider from "./src/utils/UserContext";
import AuthContext from "./src/utils/authContext";
import ChatMenu from "./src/screens/ChatMenu";
import MenuChat from "./src/screens/MenuChat";
import { AuthContextProvider } from "./src/utils/authContext";
import { getAuth } from 'firebase/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer, } from '@react-navigation/native';


export default function App(){
  const Stack = createNativeStackNavigator()
  //const [user,setUser] = useState(null); 

  const auth = getAuth();
  const user = auth.currentUser;
  console.log(auth);

  const stackNavigatorProps = {
    initialRouteName: auth.currentUser ? 'Chat' : 'Login',
    screenOptions: {
      headerShown: false,
    },
  };

  return(
    <NavigationContainer>

        <AuthContextProvider>
          <Stack.Navigator {...stackNavigatorProps}>
          
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Registro" component={Register}/>
          <Stack.Screen name="Chat" component={Chat}/>


          </Stack.Navigator>


        </AuthContextProvider>

        
 
    
    </NavigationContainer>
    
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#1b2734",
  },
});
