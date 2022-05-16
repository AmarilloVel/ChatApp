import React,{useEffect,useState} from "react";
import {StyleSheet, View,Text, TouchableOpacity} from "react-native";
import { getFirestore, onSnapshot } from "firebase/firestore";
import { doc, setDoc,set,collection,getDocs,query } from "firebase/firestore";
import { firebaseConfig } from "../utils/firebase";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

import { database } from "../../config/firebase";


import { map } from "lodash";

export default function MenuChat(){
    

    const app = initializeApp(firebaseConfig);
    //const database = getDatabase(app)
   
    const [chats,setChats]= useState([]);

    const collRef = collection(database,'salas');
    const q = query(collRef);

    useEffect(()=>{
        
        const unsub = onSnapshot(q, (querySnapshot) =>{
            querySnapshot.forEach((doc) =>{
                if(chats.includes(doc.id)){

                }else{
                    setChats(doc.id);//cambiar el set ak inicio
                }
               
            })
        } );

    },[])
    console.log(chats);

    const crearSala = () =>{

        const app = initializeApp(firebaseConfig);
        const db = getFirestore();
        const auth = getAuth(app);
      
        
        const document = doc(db,"salas","user");
        const data = {
            "owner" : "amareloo",   
        }
        setDoc(document,data)
        .then(() => console.log("Registrado"))
        .catch(err => console.log(err))   
    }

    
    return(
        <View>
            <Text> relleno</Text>
            <Text> relleno</Text>
            <TouchableOpacity >
                {
                    chats.map(info =>{
                        <Text> {info}</Text>
                    })
                }
            </TouchableOpacity>
        </View>
    )
}
//Componentes