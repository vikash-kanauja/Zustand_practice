import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useCatStore} from '../store/catStore';
import {useShallow} from 'zustand/react/shallow';

const CatController = () => {
  const {increaseBigCats, increaseSmallCats} = useCatStore(
    useShallow(state => ({
      increaseBigCats: state.increaseBigCats,
      increaseSmallCats: state.increaseSmallCats,
    })),
  );

  return (
    <View>
      <Text>{Math.random()}</Text>
      <TouchableOpacity style={styles.btn} onPress={increaseSmallCats}>
        <Text style={styles.btnText}>Increase Small Cat by One</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={increaseBigCats}>
        <Text style={styles.btnText}>Increase Big Cat by One</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CatController;

const styles = StyleSheet.create({
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
