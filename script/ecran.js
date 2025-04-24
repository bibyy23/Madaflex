import { View, Text, ActivityIndicator, StyleSheet,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const Ecran = ({navigation}) => {
    const [isLoading,setISloading] = useState(true)
    //pour creer un simulation de processus de chargement
    useEffect(() => {
      const timer = setTimeout(()=>{
        setISloading(false);
        navigation.navigate("splash")
      },3000)

      //nettoyage quand le temps de chargement est termine
      return () => {
        clearTimeout(timer)
      }
    }, [navigation])
    
  return (
    <SafeAreaView style={styles.container}>
        {/*tester si isloading est vrai et affiche l indicateur de chargment*/ }
        {isLoading ? ( 
            <View> 
                <Image style={styles.Image} source={require('../assets/logo_ispm.png')}/>
                <View style={styles.lettre}>
                  <Image 
                   source={require('../assets/les images/icons8-m-48.png')}/>
                  <Text style={styles.text}>adaflex</Text>
                </View>
                <ActivityIndicator size="large" color="#05FFA6"/>
            </View>
               
        )
        : null}
      
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:40,
        paddingHorizontal:40,
        backgroundColor:"white"
    },

    Image:{
      height:120,
      width:125,
      borderRadius:10,
      paddingHorizontal:40,
     
    },
   
    

    lettre:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      paddingBottom:40,
      right:1
      
    },

    text:{
      fontSize:22,
      fontWeight:"bold",

    }
})

export default Ecran