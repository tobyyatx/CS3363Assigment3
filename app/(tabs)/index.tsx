import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "../LoginScreen";
import AnotherScreen from "../design2";

const Stack = createStackNavigator();

export default function Tabs() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
