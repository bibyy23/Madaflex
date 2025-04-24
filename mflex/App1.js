import React from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import Header from './MadaFlexHeader';
import BottomNavigationBar from './navbar';

const width = Dimensions.get("window");
export default function App1() {
  return (
        <View style={styles.container}>
           <Header/>
           <BottomNavigationBar/>
        </View>
  );
}

const styles = StyleSheet.create({
  container1 :{
    flex:1,
    backgroundColor:"#fff",
    alignItems:'center',
    justifyContent:'center',
  },
  container:{
    flex:1,
    gap:15,
  },
});
