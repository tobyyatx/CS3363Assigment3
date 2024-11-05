import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../LoginScreen'; 
import AnotherScreen from '../design2';   

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen 
          name="login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="design2" 
          component={AnotherScreen} 
          options={{ title: 'Another Screen' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
