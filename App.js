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

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
