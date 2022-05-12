import React,{useState,useContext} from "react";
import {StyleSheet, View,Text,StatusBar,TextInput,Button, TouchableOpacity,Image} from "react-native";

import {useNavigation} from '@react-navigation/native';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from "../utils/firebase";
import AuthContext from "../utils/authContext";


import useAuth from "../hooks/useAuth";

//const Login = (props,{ navigation }) =>{



export default function Login(){

    //contexto del usuario
    const authUser = useContext(AuthContext);
    const setUser = authUser.useUser[1];
    //console.log(authUser);

    //estado para los inputs
    const [nombre,setNombre] = useState(null);

    //bdd props
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    //navigation-stack funcion
    const navigation = useNavigation();
    
    const creatCuenta = ()=>{
        signInWithEmailAndPassword(auth, nombre, "231214")
        .then((crendenciales)=>{
            console.log("cuenta Creada");        
            //const user = crendenciales.user;
            
            //Ingresamos el nuevo estado del usuario
            setUser(nombre);
        })
        .catch(error =>{
            console.log(error);
        })
    }
   
    const onSubmitLogIn = ()=>{
      //creamos la cuenta en firebase y cambiamos el estado del Login para que nons mande al chat [App.js.17]
       creatCuenta();
    } 

  return(
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.letrasTitulo}>Rakuh Chat</Text>
            </View>   
            <View>
                <TextInput
                    style={styles.input} 
                    placeholder="Correo Electronico"
                    value={nombre}
                    onChange={(e) => setNombre(e.nativeEvent.text)}
                    placeholderTextColor='grey'
                />
                <TextInput
                    style={styles.input} 
                    placeholder="Contraseña"
                    //value={nombre}
                    //onChange={(e) => setNombre(e.nativeEvent.text)}
                    placeholderTextColor='grey'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.boton} onPress={onSubmitLogIn}>
                    <Text style={styles.botonTxt}> Iniciar Sesion</Text>
                </TouchableOpacity>
                <View style={styles.viewLetraO}>
                    <Text style={styles.letraO}> ó</Text>
                </View>
                <TouchableOpacity style={styles.botonExt} >
                    <Image
                    style={styles.iconFB}
                    source={require('../images/logoFB.jpg')}
                    />
                    <Text style={styles.botonTxt}> Iniciar Sesion con Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonExt} >
                    <Image
                    style={styles.iconG}
                    source={require('../images/logoG.png')}
                    />
                    <Text style={styles.botonTxt}> Iniciar Sesion con Google</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.piePag} onPress={()=>{ navigation.navigate("registro")}}>
                    <Text style={{color:"grey"}}> ¿Aun no tienes cuenta?</Text>
                    <Text style={{color:"white", fontSize:14}}> Crear cuenta</Text>
                </TouchableOpacity>
            </View> 
        </View>
  )
}

const styles = StyleSheet.create({
   
    input: {
      height: 40,
      marginVertical: 15,
      marginHorizontal:50,
      borderRadius:20,
      borderLeftWidth:1,
      borderLeftColor:'grey',
      borderBottomWidth:1,
      borderBottomColor:'grey',
      padding: 10,
      color:'#fffD'
    },
    container: {
        flex:1,
        backgroundColor:"#1b2734",
        justifyContent:"space-between",
        
        
    },
    titulo:{
        justifyContent: "center",
        alignItems: "center",
        marginTop:60,
        
        
    },
    letrasTitulo:{
        color:"white",
        fontSize: 20,
      
    },
    viewLetraO:{
        justifyContent: "center",
        alignItems: "center",
        paddingVertical:10,
    },
    letraO:{
        color:"white",
        fontSize: 15,
        marginVertical:10,
    },
    boton:{
        backgroundColor: "#e0e0e0", 
        height:40, 
        marginTop:15,
        justifyContent: "center",
        alignItems: "center", 
        borderRadius:20,
        marginHorizontal:50,

    },
    botonExt:{
        flexDirection:"row",
        backgroundColor: "#e0e0e0",
        marginBottom: 20,   
        height:40, 
        alignItems: "center", 
        borderRadius:20,
        marginHorizontal:50,
        

    },
    botonTxt:{
        color:"#1b2734"
    },
    piePag:{
        flexDirection:'row',
        marginBottom:30,
        alignItems: "flex-end",
        justifyContent:"center",
        
        
        
    },
    iconFB: {
        marginLeft:10,
        marginRight:10,
        width: 35,
        height: 35,
        
    },
    iconG: {
        marginLeft:14,
        marginRight:14,
        width: 25,
        height: 25,
        
    }
   
  });
 
    