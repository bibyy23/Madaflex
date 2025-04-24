import { View, Text, StyleSheet, TextInput ,SafeAreaView} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import react from 'react'
import Colors from './color'



const Insertion = ({label,
    iconName,
    password,
    error,
    onFocus = () => {},
    ...props}) => {
  const [focused,setfocused]=react.useState(false);
  const[hidepassword,sethidepassword]=react.useState(password);      
  return (
    <SafeAreaView style={styles.input}>
       <Text style={styles.Label}>{label}</Text>
       <View style={[styles.inputtext,
        {borderColor: error ? Colors.red : focused ? Colors.seagreen : Colors.darkblue}]} // affiche la couleur selon l interaction de l utilisateur 
        > 
          <Icon name={iconName}
           style={styles.icons}
          />
           
          <TextInput  
          {...props} style={styles.props}//prend les valeurs de l insertion des champs
            autoCorrect={false}
            onFocus ={() =>{onFocus(),
            setfocused(true);}}
            onBlur ={() =>{setfocused(false);}}
            
          secureTextEntry={hidepassword}//cacher le mot de passe
          /> 
          {password &&
          <Icon
            onPress={()=> sethidepassword(!hidepassword)} 
            //teste si l utilisateur veut cacher le mot de passe ou non
            name={hidepassword ?'eye-outline':'eye-off-outline'}
          />
          }
       </View>
       {error &&<Text style={{color:Colors.red}} >{error}</Text>}
    
       
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    input:{
       marginBottom:10,
       

    },
    Label:{
        marginVertical:20,
        fontSize:16,
        fontWeight:"bold",
        
    },
    inputtext:{
        height:55,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:15,
        borderWidth:1,
        marginBottom:2,
        borderRadius:20,
        borderTopLeftRadius:0,
        borderBottomRightRadius:0,
      

  


    },
    icons:{
        color:Colors.darkblue,
        fontSize:20,
        marginRight:20
    },
    props:{
        flex:1,
        color:"grey",
        outlineWidth:0,
        backgroundColor:"white"

    }
})
export default Insertion