import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import firebase_controller from './firebase_func';

export default function App() {
  const a:number=1; 
  return (
    <View style={styles.container}>
      <Button
      onPress={firebase_controller.add}
      title="Add data"
      color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});