import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BearsCount from './src/components/BearsCount';
import CatsScreen from './src/components/CatsScreen';
import Cat2Component from './src/components/Cat2Component';
import CatController from './src/components/CatController';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <BearsCount /> */}
      <CatsScreen />
      <Cat2Component />
      <CatController />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
