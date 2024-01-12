import React from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';

export default function Comp() {
  return <Text style={Estilo.txtG}>Comp #Oficial</Text>;
}

export const Comp1 = () => {
  return <Text style={Estilo.txtG}>Comp #01</Text>;
};

export const Comp2 = () => {
  return <Text style={Estilo.txtG}>Comp #02</Text>;
};
