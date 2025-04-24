import React,{useEffect,useState} from "react";
import { View,Text } from "react-native";


const Animatedphrase =({word,style})=>{
    const [isphrase,setisphrase] = useState("");
    const phrase = word ? word.split(" "):["Chargement..."];
    useEffect(() =>{
        let cpt = 0;
        const interval = setInterval(()=>{

            //ajout les mots un par un 
            if(cpt < phrase.length){
                setisphrase((prev) => ( phrase[cpt]?  prev + " "+ phrase[cpt] : prev));
                cpt++;
            } else{
                clearInterval(interval);
            }
        }, 500);

        // supprime l intervalle apres avoir finis d afficher tout les mots
        return () => clearInterval(interval);
    },[word]);
    return (
        <View>
            <Text style={style}>{isphrase || "Chargement..."}</Text>
        </View>
    ) 
}    
    export default Animatedphrase;