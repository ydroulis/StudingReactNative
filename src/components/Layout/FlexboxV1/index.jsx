import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Quadrado } from '../Quadrado';

export const FlexboxV1 = () => {
  return (
    <View style={style.FlexV1}>
      <Quadrado cor="#ff801a" />
      <Quadrado cor="#50d1f6" />
      <Quadrado cor="#dd22c1" />
      <Quadrado cor="#8312ed" />
      <Quadrado cor="#36c9a7" />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV1:{
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'space-between'
  }
});
