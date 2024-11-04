// src/app.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './design1'; // Import the login screen
import AnotherScreen from './design2'; // Import the second design screen (you'll need to create this)

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Another" component={AnotherScreen} /> {/* Adjust this if you have another name */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
