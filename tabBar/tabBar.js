import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Movies from '../scenes/movies';
import MovieDetailView from "../scenes/movieDetail";
import Favourites from '../scenes/favourites';
import Search from '../scenes/search';
import Profile from '../scenes/profile';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const MoviesStack = createNativeStackNavigator();

function MoviesStackScreen() {
    return(
        <MoviesStack.Navigator screenOptions={{headerShown: false}}>
            <MoviesStack.Screen name="Movies" component={Movies}/>
            <MoviesStack.Screen name="MovieDetailView" component={MovieDetailView}/>
        </MoviesStack.Navigator>
    );
}

const TabBar = () => {
    return(
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#007AFFB3',
            tabBarInactiveTintColor: '#8E8E93E6',
            headerShown: false,
        }}
        >
            <Tab.Screen 
             name='Movies' 
             component={MoviesStackScreen}
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