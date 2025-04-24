import { View, Text, ScrollView, StyleSheet, Keyboard } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../composants/color'
import Insertion from '../composants/insertion'
import Buttons from '../composants/button'
import Animatedphrase from '../composants/animationphrase'
const Login = ({navigation}) => {
  const [erreur,seterreur]=useState({
      email:'',
      password:'',
    })
    const [input,setinput]=useState({
      email:'',
      password:'',
    })
    const valide=()=>{
      Keyboard.dismiss()
      let valid = true;
      if(!input.email ||!/\S+@\S+\.\S+/.test(input.email)){
        handleError("entrer un email existant",'email')
        valid = false;
      }
      if(!input.password || input.password.length < 8){
        handleError("mot de passe incorrect",'password')
        valid = false;
      }
      if(valid){
       login();
      }
      
    }
    const login=()=>{

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
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
         <Text style={styles.text2}>login</Text>
         {/* animation d insertion de mot un par un  */}
        <Animatedphrase style={styles.text}
          word={"enter your details to Login"}
        />

        <View>
          <Insertion
             placeholder="Enter your email"
             iconName="email-outline"
             label="Email address:"
             error={erreur.email}
             onFocus={()=>{
               handleError(null,'email')
             }}
             onChangeText={(text) => handleOnchange(text,'email')}
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
          <Buttons title="login" onPress={valide}/>
           <View style={styles.account}>
                <Text style={styles.compte}>vous n'avez pas de compte?</Text>
                <Text style={styles.register}
                  onPress={()=>navigation.navigate('inscription')}>register
                </Text>
             </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  safe:{
    flex:1,
    backgroundColor:"white"
  },
  scroll:{
    paddingTop:50,
    paddingHorizontal:20
  },
  text:{
    fontSize:18,
    color:Colors.grey,

  },
  text2:{
    fontSize:40,
    color:Colors.seagreen
  },

  register:{
    color:Colors.darkblue
  },
  account:{
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    marginVertical:20
  },
  compte:{
    textAlign:"center"
  }
})

export default Login