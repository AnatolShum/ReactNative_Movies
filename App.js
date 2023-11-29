import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import TabBar from './tabBar/tabBar';
import Login from './scenes/login';
import Forgot from './scenes/forgot';
import Register from './scenes/register';
import { FirebaseAuth } from './FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const Stack = createNativeStackNavigator();

function LoginLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name='Forgot' component={Forgot} options={{headerShown: true, headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name='Register' component={Register} options={{headerShown: true, headerTransparent: true, headerTitle: ''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabLayout() {
  return(
    <NavigationContainer>
      <TabBar/>
    </NavigationContainer>
  );
}

export default function App() { 
  const auth = FirebaseAuth;
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [])
  
  if (user) {
    return(TabLayout());
  } else {
    return(LoginLayout());
  }
}
