
import React,{useState,useEffect} from "react";
import {StyleSheet, View,Text} from "react-native";
import letterColors from "../utils/letterColors";


export default function mensaje(props){
   
    const {
        msj:{
            texto,user,tiempo
        },usuario
    } = props;

        //si user = usuario es true si no false
    const msjMio = user === usuario ;
    const [bgColorLetter, setBgColorLetter] = useState(null);

    useEffect(() =>{
        const char = user.trim()[0].toUpperCase();
        const indexLetter = char.charCodeAt() - 65;
        //console.log(letterColors[indexLetter]);
        setBgColorLetter(letterColors[indexLetter]);
    })



    const conditionalStyle = {
        container:{
            justifyContent: msjMio ? "flex-end" : "flex-start", 
        },
        viewMsj:{
            backgroundColor: msjMio ? "#fff" : "#141d27",
        },
        msj:{
            color: msjMio ? "#000" : "#fff",
            textAlign: msjMio ? 'right' : 'left',
        }
    }


    return(
        <View style={[styles.container, conditionalStyle.container]}>
            {!msjMio &&(
                <View style={[styles.letterView, {backgroundColor: `rgb(${bgColorLetter})`}]}>
                    <Text style={styles.letter}>
                        {user.substr(0,1)}
                    </Text>
                </View>
            )}
            
            <View style={[styles.viewMsj, conditionalStyle.viewMsj]}>
                <Text style={[styles.msj, conditionalStyle.msj]}>{texto}</Text>
                <Text style={[styles.tiempo, msjMio ? styles.tiempoIz : styles.tiempoDerecha]}>{tiempo}</Text>
            </View>
            
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
    },
    viewMsj:{
        
        borderRadius: 20,
        minHeight: 20,
        minWidth:"30%",
        maxWidth:"80%",
    },
    msj:{
        padding:10,
        paddingBottom:18,
        
    },
    tiempo:{
        fontSize:10,
        position:"absolute",
        bottom: 5,
    },
    tiempoDerecha:{
        right:10,
        color:"grey"
    },
    tiempoIz:{
        left:10,
        color:'grey',
    },
    letterView:{
        height: 35,
        width:35,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginRight:10,
        backgroundColor:"red"
    },
    letter:{
        fontSize:18,
        color: "#fff",
        textTransform: "uppercase",
    }
})