import React from 'react';
import { View,  Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const Header= ()=>{
    return(
        <View style={styles.head}>
            <View style={styles.icon}>
                <Image source={require('../assets/les images/icons8-m-48.png')} style={{
                    width:70,
                    height:70,
                }}/>
                <Text style={styles.Text}>adaflex</Text>
            </View>
            <View style={styles.icons}>
                <Icon name="bell" size={30}/>
                <Icon name="moon" size={30}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    head: {
        height: 100,
        flexDirection:"row",
        alignItems: 'center',
        justifyContent:"space-between",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        elevation: 5,
        padding:20,
        marginTop:30,
        // borderBottomWidth:2,
    },
    icons:{
        flexDirection:"row",
        alignItems: 'center',
        gap:10,
    },
    icon:{
        flexDirection:"row",
        alignItems: 'center',
    },
    Text: {
        fontWeigth:'bold',
        fontSize: 30,
        marginLeft:-5,
    }
})
export default Header;