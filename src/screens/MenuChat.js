import React,{} from "react";
import {StyleSheet, View,Text,Button,ScrollView,TouchableOpacity} from "react-native";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc,set,collection } from "firebase/firestore";
import { firebaseConfig } from "../utils/firebase";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';


export default function MenuChat(){

    const crearSala = () =>{

        const app = initializeApp(firebaseConfig);
        const db = getFirestore();
        const auth = getAuth(app);
      
        
        const document = doc(db,"salas","user");
        const data = {
            "owner" : "amarillo",   
        }
        setDoc(document,data)
        .then(() => console.log("Registrado"))
        .catch(err => console.log(err))   
    }

    
    return(
        <View>
            <Text> relleno</Text>
            <Text> relleno</Text>
            <TouchableOpacity onPress={() => crearSala()}>
                <Text> Create room</Text>
            </TouchableOpacity>
        </View>
    )
}
//Componentes