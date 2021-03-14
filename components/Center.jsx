import React from 'react';
import { StyleSheet, View } from 'react-native';

const Center = ({ children }) => {
  return <View style={styles.screen}>{children}</View>;
};

export default Center;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
