import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const About = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Les emploies:</Text>
            <Text style={styles.about}>Découvrer les emploies en fonction de vos compétences:</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:"column",
        // gap:10,
        marginLeft:10,
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
    },
    about:{
        fontSize:15,
    },
});
export default About;