import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import CardList from './cardList';
import About from './about';


const Tab = createBottomTabNavigator();

const HomeScreen = () => 
<View style={styles.Cardcontainer} >
  <About/>
  <CardList/>
</View>;
const SearchScreen = () => <View style={styles.screen} />;
const MessageScreen = () => <View style={styles.screen} />;
const ProfileScreen = () => <View style={styles.screen} />;
const PostScreen = () => <View style={styles.screen} />;

const CustomTabBarButton = ({ onPress }) => (
  <TouchableOpacity style={styles.plusButton} onPress={onPress}>
    <Image source={require('../assets/les images/icons8-m-48.png')}/>
  </TouchableOpacity>
);

const BottomNavigationBar = () =>{
    return(
        <NavigationIndependentTree>
            <Tab.Navigator
                screenOptions={{
                tabBarStyle: styles.tabBar,
                // tabBarShowLabel: false,
                headerShown: false,
        }}
        >
                <Tab.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{ tabBarIcon: ({ color }) => <Icon name="home" size={27} color={color} /> }} 
                />
                {/* <Tab.Screen 
                    name="Search" 
                    component={SearchScreen} 
                    options={{ tabBarIcon: ({ color }) => <Icon name="search" size={25} color={color} /> }} 
                /> */}
                {/* <Tab.Screen 
                    name="Post" 
                    component={PostScreen} 
                    options={{ 
                    tabBarButton: (props) => <CustomTabBarButton {...props} />
                    }} 
                /> */}
                <Tab.Screen 
                    name="Messages" 
                    component={MessageScreen} 
                    options={{ tabBarIcon: ({ color }) => <Icon name="message-circle" size={27} color={color} /> }} 
                />
                <Tab.Screen 
                    name="Profile" 
                    component={ProfileScreen} 
                    options={{ tabBarIcon: ({ color }) => <Icon name="user" size={27} color={color} /> }} 
                />
            </Tab.Navigator>
        </NavigationIndependentTree>
    )
}

export default BottomNavigationBar;

const styles = StyleSheet.create({
    screen: {
      position:'absolute',
    },
    tabBar: {
      position:'absolute',
      // backgroundColor: 'transparent',
      height: 100,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderTopColor:'#000',
      borderTopWidth:5,
      shadowColor:'#000',
      shadowRadius:4,
      shadowOffset:{
        width:0,
        height:2,
      },
      shadowOpacity:0.9,
      paddingTop:"5%",
      elevation:5,
    },
    plusButton: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: 'goldenrod',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 20,
      marginBottom:30,
      elevation: 5,
      bottom:50,
    },
    Cardcontainer: {
        flex: 1, 
        paddingBottom:100,
        backgroundColor:'white',
        gap:40,
    },
  });
  