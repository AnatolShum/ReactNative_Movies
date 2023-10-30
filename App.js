import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabBar from './tabBar/tabBar';

export default function App() { 
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  );
}
