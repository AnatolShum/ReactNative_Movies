import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from './scenes/movies';
import Favourites from './scenes/favourites';
import Search from './scenes/search';
import Profile from './scenes/profile';


const Tab = createBottomTabNavigator();

const TabBar = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Movies' component={Movies}/>
            <Tab.Screen name='Favourites' component={Favourites}/>
            <Tab.Screen name='Search' component={Search}/>
            <Tab.Screen name='Profile' component={Profile}/>
        </Tab.Navigator>
    );
}

export default TabBar

const styles = StyleSheet.create({

})