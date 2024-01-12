import React from 'react';
import { Text } from 'react-native';
import Proptypes from 'prop-types';
import Estilo from '../estilo'

export const Aleatório = ({ min, max }) => {
  const delta = max - min + 1;
  const randomNumber = parseInt(Math.random() * delta) + min;

  return (
    <Text style={Estilo.txtG}>
      O número aleatório é { randomNumber }
    </Text>
  );
}

Aleatório.propTypes = {
  min: Proptypes.number.isRequired,
  max: Proptypes.number.isRequired
}
