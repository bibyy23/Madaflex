import React,{useEffect,useState} from "react";
import { View,Text } from "react-native";


//fonction pour faire apparaitre un mot un par un
const AnimatedText = ({text,style,vitesse})=>{
    const [istext, setistext] = useState("");
    useEffect(() =>{
        let cpt = 0;
        setistext("");// reinitialise le texte a chaque changement de 'texte'
        const interval = setInterval(()=>{
            if(cpt < text.length){
                // ajout des lettres un par un
                setistext((prev) => prev + text[cpt]);
                cpt++;
            } else{
                clearInterval(interval);
            }
        }, vitesse);
        return () => clearInterval(interval);
    },[text]);
    return(
        <View >
            <Text style={style} >{istext || "Chargement..."}</Text>
        </View>
    )
}


   

export default  AnimatedText;   