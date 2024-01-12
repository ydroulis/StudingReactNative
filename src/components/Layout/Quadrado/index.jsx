import React from 'react';
import { StyleSheet, View } from 'react-native';
import Proptypes from 'prop-types';


export const Quadrado = ({ cor, lado }) =>  {

  const style = StyleSheet.create({
    Quadrado:  {
      height: lado,
      width: lado,
      backgroundColor: cor || '#000',
    }
  });

  return(
    <View style={style.Quadrado}/>
  )
}

Quadrado.propTypes = {
  cor: Proptypes.string,
  lado: Proptypes.number
}
