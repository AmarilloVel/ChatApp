import React,{useState, useEffect, useRef, useContext} from "react";
import {StyleSheet, View,Text,Button,ScrollView} from "react-native";
//Componentes
import Teclado from "../components/teclado";
import ChatHeader from "../components/chatHeader";
import Mensaje from "../components/mensaje";


import { map } from "lodash";
//libreria para la fecha
import moment from "moment";
//BDD
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from "../utils/firebase";
import { getDatabase, ref, push, onValue} from "firebase/database"; 


import AuthContext from "../utils/authContext";


export default function Chat(){

  const authUser = useContext(AuthContext);
  console.log(authUser.useUser[0]);
  const usuario = authUser.useUser[0];
  const {setUser} = authUser.useUser[1];
  


  //base de datos
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app)
 
  const chatName = "Nombre del chat";

  const [mensajes,setMensajes] = useState([]);
  const chatScrollRef = useRef();
  

  //console.log(usuario);
  //Use Effect para guardar los msj
  useEffect(() =>{
    const chat =  ref(database,'mensajes');
    onValue(chat, (snapshot) => {
      setMensajes(snapshot.val());
    })
  }, []);
  //use Effect Para Scroll con nuevo msj
  useEffect(()=>{
    chatScrollRef.current.scrollTo({y: 100000000});
  },[mensajes]);

  
  //cerrar sesion
  const LogOut= ()=>{
     setUser(null);
     console.log("cuenta cerrada");
  } 

  //mandar los msjs a la bd
  const sendMsj = (msj) => {
    const time = moment().format("hh:mm a");
    push(ref(database,'mensajes'),{
      user: usuario,
      texto: msj,
      tiempo: time,
    });
    //console.log(msj);
  }

  return(
    <> 
        <ChatHeader chatName={chatName}/>
        <View style={styles.msj}>
            <ScrollView style={styles.chatView} ref={chatScrollRef}>
              
              {
                map(mensajes, (msj,index) => (
                  <Mensaje key={index} msj={msj} usuario={usuario}/>
                ))
              }
              
            </ScrollView>
            <Teclado sendMsj={sendMsj}/>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    msj: {
        flex: 1,
        justifyContent: "space-between",
        marginTop:10
    },
    botonLogout: {
      paddingVertical:5,
      paddingHorizontal:40,
      marginTop: 40,
  }, 
  header:{
    paddingBottom:15 ,
    paddingTop:15,
    flexDirection: "row",
    justifyContent:"center",
    
    
  },
  headerText:{
    fontWeight: "bold",
    color: "#ffff",

  },
  chatView:{
    backgroundColor:"#1b2734"
  },
});