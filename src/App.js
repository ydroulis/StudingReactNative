import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlexboxV4 } from './components/Layout/FlexboxV4';
// import { Primeiro } from './components/Primeiro';
// import CompPadrao, { Comp1, Comp2 } from './components/Multi';
// import { MiniMax } from './components/MiniMax';
// import { Aleatório } from './components/Aleatório';
// import { Titulo } from './components/Titulo';
// import { Botao } from './components/Botao';
// import { Contador } from './components/Contador';
// import { PlatformTool } from './components/PlatformTool';
// import { ListaProdutos } from './components/ListaProdutos';
// import { Quadrado } from './components/Layout/Quadrado';
// import { FlexboxV1 } from './components/Layout/FlexboxV1';
// import { FlexboxV2 } from './components/Layout/FlexboxV2';
// import { FlexboxV3 } from './components/Layout/FlexboxV3';

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
});

function App() {
  return (
    <View style={style.App}>
      <FlexboxV4/>
      {/*
      <FlexboxV3/>
      <FlexboxV2/>
      <FlexboxV1/>
      <ListaProdutos/>
      <PlatformTool/>
      <Contador inicial={100} passo={10}/>
      <Botao/>
      <Titulo principal='Cadastro Produto' secundario='Tela de Cadastro Produto'/>
      <Aleatório min={5} max={10}/>
      <MiniMax min={3} max={20}/>
      <CompPadrao />
      <Comp1 />
      <Comp2 />
      <Primeiro /> */}
    </View>
  );
}

export default App;
