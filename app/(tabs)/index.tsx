import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Switch, BackHandler } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const App = () => {
  const [tema, setTema] = useState('Claro');
  const [tamanhoFonte, setTamanhoFonte] = useState(16);
  const [modoNoturno, setModoNoturno] = useState(false);

  const resetarPreferencias = () => {
    setTema('Claro');
    setTamanhoFonte(16);
    setModoNoturno(false);
  };

  // Função que retorna o estilo do contêiner com base nas preferências
  const getContainerStyle = () => {
    return {
      flex: 1,
      padding: 20,
      justifyContent: 'center', // Centraliza verticalmente
      alignItems: 'center',     // Centraliza horizontalmente
      backgroundColor: modoNoturno || tema === 'Escuro' ? '#590D8C' : '#BCF2FF',
    };
  };

  const getMainContainerStyle = () =>({
    backgroundColor: modoNoturno || tema === 'Escuro' ? '#380759' : '#35717F' 
  } 
)

  // Função que retorna a cor e o tamanho do texto com base nas preferências
  const getTextStyle = () => ({
    color: modoNoturno || tema === 'Escuro' ? '#FFF' : '#BCF2FF',
    fontSize: tamanhoFonte,
  });

  // Função que retorna o estilo dos componentes de entrada (Picker e Slider)
  const getInputStyle = () => ({
    color: modoNoturno || tema === 'Escuro' ? '#fff' : '#000',
    fontSize: tamanhoFonte,
    backgroundColor: modoNoturno || tema === 'Escuro' ? '#6B12A6' : '#70E4FF',
  });

  return (
    <View style ={getContainerStyle()}>
      <View style={[styles.container, getMainContainerStyle()]}>
      <Text style={[styles.titulo, getTextStyle()]}>Configurações de Preferências</Text>

      <Text style={[styles.label, getTextStyle()]}>Tema:</Text>
      <Picker
        selectedValue={tema}
        style={[styles.picker, getInputStyle()]}
        onValueChange={(itemValue) => setTema(itemValue)}
      >
        <Picker.Item label="Claro" value="Claro" />
        <Picker.Item label="Escuro" value="Escuro" />
        <Picker.Item label="Automático" value="Automático" />
      </Picker>

      <Text style={[styles.label, getTextStyle()]}>Tamanho da Fonte: {tamanhoFonte}</Text>
      <Slider
        style={[styles.slider, getInputStyle()]}
        minimumValue={12}
        maximumValue={30}
        step={1}
        value={tamanhoFonte}
        onValueChange={(value) => setTamanhoFonte(value)}
      />

      <Text style={[styles.label, getTextStyle()]}>
        Modo Noturno: {modoNoturno ? 'Ativado' : 'Desativado'}
      </Text>
      <Switch value={modoNoturno} onValueChange={(value) => setModoNoturno(value)} />

      <View style={styles.botaoContainer}>
        <Button
          title="Resetar Preferências"
          color={modoNoturno || tema === 'Escuro' ? '#8E1ED9' : '#70E4FF'}
          onPress={resetarPreferencias}
        />
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container:{
    width: '100%',
    padding: 20,
    borderRadius: 20,
  },
  label: {
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  slider: {
    height: 40,
    borderRadius: 5
  },
  botaoContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    borderRadius: 20
  },
});

export default App;
