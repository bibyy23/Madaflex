    import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Colors from './color'

const Buttons = ({title,onPress=()=>{}},...props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}{...props}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles= StyleSheet.create({
    button:{
        height:55,
        width:"100%",
        backgroundColor:Colors.seagreen,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        marginVertical:40
    },
    text:{
        color:"white",
        fontWeight:"bold",
        fontSize:15

    }
})

export default Buttons
