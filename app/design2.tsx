import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Design2Screen = () => {
  return (
    <View style={styles.container}>
      {/* Ellipse 3 */}
      <View style={styles.ellipse3} />

      {/* Verification Email Sent Text */}
      <Text style={styles.verificationText}>Verification Email Sent!</Text>

      {/* Ellipse 2 */}
      <View style={styles.ellipse2} />

      {/* Study Group Finder Text */}
      <Text style={styles.studyGroupText}>Study Group Finder</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 393,
    height: 852,
    backgroundColor: '#801818',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ellipse3: {
    position: 'absolute',
    top: 14,
    left: 25,
    width: 337,
    height: 146,
    borderRadius: 73,
    backgroundColor: '#0F0101',
    opacity: 1,
  },
  verificationText: {
    position: 'absolute',
    top: 71,
    left: 66,
    width: 241,
    height: 112,
    color: '#FFFFFF',
    fontSize: 24,
    opacity: 1,
    textAlign: 'center',
  },
  ellipse2: {
    position: 'absolute',
    top: 428,
    left: 37,
    width: 320,
    height: 97,
    borderRadius: 48.5, 
    backgroundColor: '#B31818',
    opacity: 1,
  },
  studyGroupText: {
    position: 'absolute',
    top: 459,
    left: 85,
    width: 252,
    height: 35,
    color: '#000000',
    fontSize: 24, 
    opacity: 1,
    textAlign: 'center',
  },
});

export default Design2Screen;
