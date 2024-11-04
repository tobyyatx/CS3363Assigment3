import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type LoginScreenProps = {
  navigation: NavigationProp<any>; // Changed from StackNavigationProp to NavigationProp
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome!</Text>
      <Button title="Go to Another Screen" onPress={() => navigation.navigate('design2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#000',
  },
});

export default LoginScreen;



