import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import Proptypes from 'prop-types';
import Estilo from '../estilo';

export const Contador = ({ inicial = 0, passo = 1 }) => {
  const [ numero, setNumero ] = useState(inicial);

  const inc = () => setNumero(prev => prev + passo);
  const dec = () => setNumero(prev => prev - passo);

  return (
    <>
      <Text style={Estilo.txtG}>{numero}</Text>
      <Button title="+" onPress={inc}></Button>
      <Button title="-" onPress={dec}></Button>
    </>
  );
};

Contador.propTypes = {
  inicial: Proptypes.number,
  passo: Proptypes.number
}
