import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ellipse} />
      <Text style={styles.studyGroupText}>Study Group Finder</Text>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Text style={styles.loginText}>Log-in</Text>
      <Button title="Go to Another Screen" onPress={() => navigation.navigate('design2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#801818',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  studyGroupText: {
    color: '#D9D9D9',
    fontSize: 24,
    position: 'absolute',
    top: 56,
    left: 81,
    width: 252,
    height: 35,
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 24,
    position: 'absolute',
    top: 275,
    left: 140,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 24,
    position: 'absolute',
    top: 447,
    left: 150,
  },
  ellipse: {
    position: 'absolute',
    top: 21,
    left: 37,
    width: 320,
    height: 105,
    borderRadius: 52.5,
    backgroundColor: '#B31818',
  },
});

export default LoginScreen;

