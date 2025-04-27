import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useCatStore} from '../store/catStore';

const CatsScreen = () => {
  const {
    cats: {bigCat, smallCat}, // when we use state like this in another component both component re render when once value change
    increaseBigCats,
    increaseSmallCats,
    summary,
  } = useCatStore(state => state);
  // if we unnessary rendering we use state like
  // const bigCat = useCatState(state => state.cats.bigCat)
  return (
    <View style={{backgroundColor: 'green', padding: 20}}>
      <Text>{bigCat}</Text>
      <TouchableOpacity style={styles.btn} onPress={increaseBigCats}>
        <Text style={styles.btnText}>Increase Big cat by one</Text>
      </TouchableOpacity>
      <Text>{smallCat}</Text>

      <TouchableOpacity style={styles.btn} onPress={increaseSmallCats}>
        <Text style={styles.btnText}>Increase Small cat by one</Text>
      </TouchableOpacity>
      <Text>Total cats : {summary()}</Text>
      <Text>{Math.random()}</Text>
    </View>
  );
};

export default CatsScreen;

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
