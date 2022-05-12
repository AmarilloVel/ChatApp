import { View,StyleSheet } from "react-native";
import React, {useContext} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer, } from '@react-navigation/native';
import Login from "../screens/Login";
import Register from "../screens/Register";



const Stack = createNativeStackNavigator()

const LogStack = (props)=>{

    const {setUser} = props;
   
    //console.log(props);
    return( 
        <NavigationContainer >
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="login" >
                     {()=><Login setUser={setUser}/>}
                     
                </Stack.Screen>

                <Stack.Screen name="registro">
                     {()=><Register/>}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({
    containter:{
        backgroundColor: "#141d27",
       
        
        
    },
})

export default LogStack;