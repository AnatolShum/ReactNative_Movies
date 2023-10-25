import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../scenes/movies';
import Favourites from '../scenes/favourites';
import Search from '../scenes/search';
import Profile from '../scenes/profile';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabBar = () => {
    return(
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#007AFFB3',
            tabBarInactiveTintColor: '#8E8E93E6',
            headerTransparent: true,
            headerTintColor: 'white',
            headerTitleAlign: 'left',
            headerTitleStyle: {
                fontSize: 32,
                fontWeight: '700',
            }
        }}
        >
            <Tab.Screen 
             name='Movies' 
             component={Movies}
             options={{
                tabBarLabel: 'Movies',
                tabBarIcon: ({ color, size }) => (
                 <Ionicons name='ios-film-outline' color={color} size={size}/>
                ),
            }}
            />
            <Tab.Screen 
             name='Favourites' 
             component={Favourites}
             options={{
                tabBarLabel: 'Favourites',
                tabBarIcon: ({ color, size }) => (
                 <Ionicons name='ios-star-outline' color={color} size={size}/>
                ),
             }}
            />
            <Tab.Screen 
             name='Search' 
             component={Search}
             options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({ color, size }) => (
                 <Ionicons name='ios-search' color={color} size={size} />
                ),
             }}
            />
            <Tab.Screen 
             name='Profile' 
             component={Profile}
             options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                 <Ionicons name='ios-person' color={color} size={size}/>
                ),
             }}
            />
        </Tab.Navigator>
    );
}

export default TabBar

const styles = StyleSheet.create({
tabNavigator: {
backgroundColor: 'red',
},
});