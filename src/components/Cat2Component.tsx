import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useCatStore} from '../store/catStore';

const Cat2Component = () => {
  const bigCat = useCatStore(state => state.cats.bigCat); // when we use state like this then component dont re render when ohter state chage except
  return (
    <View style={{margin: 40, padding: 10, backgroundColor: 'yellow'}}>
      <Text>{` Big cat count ${bigCat}`}</Text>
      <Text>{Math.random()}</Text>
    </View>
  );
};

export default Cat2Component;

const styles = StyleSheet.create({});


 //   const {increaseBigCats, increaseSmallCats} = useCatStore(state => state);
  // when we call function to update state that re-render all componet that use state value and also re render this componet
  // to sole this issue , we need to create auto generate selector in utils

  // const increaseBigCats = useCatStore.use.increaseBigCats(); // if we use function like this then this component not re render if they not have any state of store
  // const increaseSmallCats = useCatStore.use.increaseSmallCats();

  // if we want to access both in a single code