import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import useBearStore from '../store/bearStore';


const BearsCount = () => {
  const {bears, increasePopulation} = useBearStore(state => state);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{bears}</Text>
      <TouchableOpacity style={styles.btn} onPress={increasePopulation}>
        <Text style={styles.btnText}>Increase bear by one</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BearsCount;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    padding: 20, // optional: for spacing
    borderRadius: 10, // optional: for better look
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  btn: {
    height: 50,
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: 'pink',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});
