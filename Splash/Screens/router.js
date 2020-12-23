import React, { Component } from 'react';
import {SafeAreaView, TouchableOpacity, Image,ImageBackground,Text, StyleSheet, TextStyle,View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Splash from './Splash';
import Demo from './Demo';
import Start from './Start';
import text from './text'
import Out from './Out'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavi() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#4a4a4a',
        shadowColor: '#f2f2f2',
      }}>
      <Drawer.Screen name="Start" component={Start} />
      <Drawer.Screen name="Scan Image" component={Demo} />
      <Drawer.Screen name="Enter Text" component={text} />
    </Drawer.Navigator>
  );
}

const MyStack = () => {
    return (
        
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        
        <Stack.Screen
          name="Scan Image"
          component={Demo}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Start"
          component={Start}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Enter Text"
          component={text}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Detected Text"
          component={Out}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    );
  };
  
  const App = () => {
      return (
          <NavigationContainer>
            <MyStack />
          </NavigationContainer>
      );
    };
  
    export default App;