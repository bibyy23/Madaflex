import { View, Text, ScrollView, StyleSheet, Keyboard,SafeAreaView, Alert,Animated } from 'react-native'
import React from 'react'
import Insertion from '../composants/insertion'
import Buttons from '../composants/button'
import Colors from '../composants/color'
import Animatedphrase from '../composants/animationphrase'

const Inscription = ({navigation}) => {

  const [erreur,seterreur]=React.useState({
    email:'',
    phone:'',
    password:'',
    confirmpassword:'',
  })
  const [input,setinput]=React.useState({
    email:'',
    phone:'',
    password:'',
    confirmpassword:'',
  })
  {/*fonction pour tester si l utilisateur entre les bonnes coordonnes*/}
  const valide=()=>{
    Keyboard.dismiss()
    let valid = true;
    if(!input.email || !/\S+@\S+\.\S+/.test(input.email)){
      handleError("Entrer un email valide",'email')
      valid = false;
    }
    
    if(!input.phone || !/^\d{10}$/.test(input.phone)){
      handleError("Entrer un numero valide",'phone')
      valid = false;
    }
    
    if(!input.password || input.password.length < 8){
      handleError("8 caractères minimum",'password')
      valid = false;
    }
    if(input.password !==input.confirmpassword){
      handleError("Le mots de passe ne corresponde pas",'confirmpassword')
      valid = false;
    }
    if(valid){
      Alert.alert("Inscription reussie")
    }
  }
  const register=()=>{
    
  }

  {/*fonction pour mettre a jour l etat de chaque champ saisie*/}
  const handleOnchange=(text,input)=>{
    setinput((prevState)=>({...prevState,[input]:text}))
  }

  {/*fonction pour afficher les erreurs de chaque champs saisie*/}
  const handleError =(errorMessage,input)=>{
    seterreur((prevState)=>({...prevState,[input]:errorMessage}))

  }
  return (
   <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow:1,
        paddingTop:50,
        paddingHorizontal:20,
        paddingBottom:10,}}
        keyboardShouldPersistTaps="handled">

        <View>
         <Text style={styles.text1}>register</Text>
         {/*<Text style={styles.text2}></Text>*/}
         <Animatedphrase
            word={"Enter your details to register"}
            style={styles.text2}
         />
        </View>

        {/*insertion dans les champs de saisie*/}
        
        <View>
          <Insertion 
            placeholder="Enter your email"
            iconName="email-outline"
            label="Email address:"
            error={erreur.email}
            onFocus={()=>{
              handleError(null,'email')
            }}
            onChangeText={(text)=>handleOnchange(text,'email')}
            
          />
          <Insertion 
            placeholder="Enter your phone number"
            iconName="phone-outline"
            label="phone number:"
            keyboardType="numeric"
            error={erreur.phone}
            onFocus={()=>{
              handleError(null,'phone')
            }}

            onChangeText={text =>handleOnchange(text,'phone')}
          />

          <Insertion 
            placeholder="Enter your password"
            iconName="lock-outline"
            label="password:"
            password
            error={erreur.password}
            onFocus={()=>{
              handleError(null,'password')
            }}
            onChangeText={(text)=>handleOnchange(text,'password')}
            />

          <Insertion 
            placeholder="confirm your password"
            iconName="lock-outline"
            label="confirm password:"
            password
            error={erreur.confirmpassword}
            onFocus={()=>{
              handleError(null,'confirmpassword')
            }}
            onChangeText={(text)=>handleOnchange(text,'confirmpassword')}
          />
          <Buttons title="register" onPress={valide}/>
          <View >
            <SafeAreaView style={styles.account}>
             <Text style={styles.compte}>already have account?</Text>
             <Text style={styles.login}
              onPress={()=>navigation.navigate('Login')}>Login</Text>
            </SafeAreaView> 
          </View>

        </View>
      </ScrollView>
   </SafeAreaView>
   
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
       
    },
    
    text1:{
      color:Colors.seagreen,
      fontSize:40,
      fontWeight:"bold"
    },
    text2:{
      color:"grey",
      fontSize:18,
      marginVertical:10

    },
    account:{
      flexDirection:"row",
      fontSize:20,
      marginBottom:20,
      justifyContent:"center",
      
    },
    login:{
      color:Colors.darkblue,
      textAlign:"center",
    
    },
    compte:{
      textAlign:"center"
    }
})

export default Inscription