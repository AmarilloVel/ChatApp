import React,{useState,useContext} from "react";
import {StyleSheet, View,Text,StatusBar,TextInput,Button, TouchableOpacity,Image, Alert} from "react-native";
import { db } from "../utils/firebase";
import { doc, setDoc,set } from "firebase/firestore";

export default function ChatMenu(){


    const crearSala = () => {
        const collect = doc(db,"salas","jesus");
        const datos = {
            "owner" : 20,
        }
        setDoc(collect,datos)
        .then(()=> console.log("registrado"))
        .catch((err) => Alert.alert("Error",err.message));
    }
   

    return(
        <View>
            <TouchableOpacity onPress={() => crearSala()}>
                <Text > Crear Sala</Text>
            </TouchableOpacity>
        </View>
    )
}