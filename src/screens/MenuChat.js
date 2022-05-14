import React,{useEffect} from "react";
import {StyleSheet, View,Text,Button,ScrollView,TouchableOpacity} from "react-native";
import { getFirestore, onSnapshot } from "firebase/firestore";
import { doc, setDoc,set,collection,getDocs,query } from "firebase/firestore";
import { firebaseConfig } from "../utils/firebase";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

import { database } from "../../config/firebase";

import { getDatabase, ref, push, onValue} from "firebase/database"; 

export default function MenuChat(){

    const app = initializeApp(firebaseConfig);
    //const database = getDatabase(app)


    const collRef =  collection(database,'salas');
    //const docSnap = getDoc(docRef);
    const q = query(collRef);

    const unsub = onSnapshot(q, (querySnapshot) =>{
        querySnapshot.forEach((doc) =>{
            console.log(doc.data(), "---", doc.id);
        })
    } );


    const querySnapshot = getDocs(collRef);
    console.log(unsub);

    

    

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
            <TouchableOpacity onPress={() => crearSala()}>
                <Text> Create room</Text>
            </TouchableOpacity>
        </View>
    )
}
//Componentes