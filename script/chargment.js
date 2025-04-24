import {  StyleSheet,Image , Animated} from 'react-native'
import React,{useEffect,useRef} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Buttons from '../composants/button'
import AnimatedText from '../composants/animation';


const Chargment  = ({navigation}) => {
    const animation = useRef(new Animated.Value(0)).current

    useEffect(()=>{
        Animated.timing(animation,{
            toValue:1,
            duration:3000,
            useNativeDriver:true
            
        }).start()
    },[animation])

    
    return (
        <SafeAreaView style={style.root}> 
            <Animated.Image  style={[style.image,{opacity:animation}]} 
                source={require('../assets/logo_ispm.png')}
            />
        
            {/*animation du texte */}
            <AnimatedText 
                vitesse={200}
                text={"Bienvenue"} 
                style={[style.text1,{opacity:animation}]}
            />
            {/*<Animated.Text style={[style.lettre,{opacity:animation}]}>sur</Animated.Text>*/}
            <AnimatedText
                vitesse={250}
                text={"sur"}
                style={[style.lettre,{opacity:animation}]}
            />
            <Animated.View style={[style.container,{opacity:animation }]}>
                <Image source={require('../assets/les images/icons8-m-48.png')}
                />
                <AnimatedText 
                    vitesse={500}
                    text={"adaflex"}
                    style={style.text}
                />    
            </Animated.View>
            <Buttons style={style.button} title="continuer" onPress={()=>navigation.navigate('inscription')}/>

        </SafeAreaView>
    )
    
}
const style = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:"white",
        paddingHorizontal:20,
        paddingVertical:20,
        alignItems:"center"  
    },
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"

    },
    
    image:{
        width:100,
        height:100,
        borderRadius:10,
        paddingVertical:25,
      
    },

    text:{
        fontSize:20,
        fontFamily:"Poppins-Bold",
        textAlign:"center",
        paddingVertical:40,
    },
    text1:{
        fontSize:40,
        textAlign:"center",
        paddingVertical:25
    },
    lettre:{
        fontSize:18,
        textAlign:"center"

    },
    button:{
    
        justifyContent:"flex-end",
        marginBottom:20,
                
    }

})

export default Chargment