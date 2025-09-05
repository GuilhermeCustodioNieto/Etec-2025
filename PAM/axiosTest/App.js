import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, ScrollView } from 'react-native';
import axios from 'axios';

export default function App() {
  const [cep, setCep] = useState('');
  const [nome, setNome] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [endereco, setEndereco] = useState(null);

  const [erro, setErro] = useState('');

  const buscarEndereco = async () => {
    if (cep.length !== 9) {
      setErro('CEP inválido. Digite exatamente 9 números.');
      setEndereco(null);
      return;
    }

    try {
      Keyboard.dismiss();
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      if (response.data.erro) {
        setErro('CEP não encontrado.');
        setEndereco(null);
      } else {
        setEndereco(response.data);
        setErro('');
      }
    } catch (error) {
      setErro('Ocorreu um erro na consulta. Tente novamente.');
      setEndereco(null);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titCep}>Via CEP</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        placeholderTextColor="#fff"
      />

      <TextInput
        style={styles.input}
        placeholder="Nascimento (dd/mm/aaaa)"
        value={nascimento}
        onChangeText={setNascimento}
        keyboardType="numeric"
        placeholderTextColor="#fff"
      />

      <TextInput
        style={styles.input}
        placeholder="Estado Civil"
        value={estadoCivil}
        onChangeText={setEstadoCivil}
        placeholderTextColor="#fff"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
        maxLength={9}
        placeholderTextColor="#fff"
      />

      <TouchableOpacity style={styles.button} onPress={buscarEndereco}>
        <Text style={styles.buttonText}>Buscar Endereço</Text>
      </TouchableOpacity>

      {erro && <Text style={styles.error}>{erro}</Text>}

      {endereco && (
        <View>
          <Text style={[styles.texts, styles.result]}>Nome: {nome}</Text>
          <Text style={[styles.texts, styles.result]}>Nascimento: {nascimento}</Text>
          <Text style={[styles.texts, styles.result]}>Estado Civil: {estadoCivil}</Text>
          <Text style={[styles.texts, styles.result]}>Logradouro: {endereco.logradouro}</Text>
          <Text style={[styles.texts, styles.result]}>Bairro: {endereco.bairro}</Text>
          <Text style={[styles.texts, styles.result]}>Cidade: {endereco.localidade}</Text>
          <Text style={[styles.texts, styles.result]}>UF: {endereco.uf}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titCep: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: '700',
    color: '#7F00FF',
    margin: 40,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#141414',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#FFF',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    color: '#fff',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  result: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    textAlign: 'left',
  },
  texts: {
    color: '#fff',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#7F00FF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
