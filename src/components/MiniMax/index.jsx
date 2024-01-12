import React from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';
import Proptypes from 'prop-types';

export const MiniMax = ({ max, min }) => {
  console.warn(max, min)
  return (
    <Text style={Estilo.txtG}>
      O valor { max } é maior que o valor { min }!
    </Text>
  );
};

MiniMax.propTypes = {
  max: Proptypes.number.isRequired,
  min: Proptypes.number.isRequired
}
