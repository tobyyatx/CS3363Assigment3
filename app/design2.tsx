import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnotherScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Another Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#000',
  },
});

export default AnotherScreen;