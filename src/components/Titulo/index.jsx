import React from 'react';
import Estilo from '../estilo';
import { Text } from 'react-native';
import Proptypes from 'prop-types'

export const Titulo = ({ principal, secundario }) => {
  return (
    <>
      <Text style={Estilo.txtG}>{principal}</Text>
      <Text >{secundario}</Text>
    </>
  );
};

Titulo.propTypes = {
  principal: Proptypes.string.isRequired,
  secundario: Proptypes.string.isRequired,
}
