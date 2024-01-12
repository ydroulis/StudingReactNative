import React from 'react';
import { Text, Platform } from 'react-native';
import Estilo from '../estilo';

export const PlatformTool = () => {
  if (Platform.OS === 'android') {
    return <Text style={Estilo.txtG}>Android</Text>
  } else if (Platform.OS === 'ios') {
    return <Text style={Estilo.txtG}>Ios</Text>
  } else {
    return <Text style={Estilo.txtG}>Eita!!</Text>
  }
};
