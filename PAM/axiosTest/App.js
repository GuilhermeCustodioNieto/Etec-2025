import React, { useState, useEffect } from 'react';
import { Text, TextInput, StyleSheet, Keyboard, ScrollView } from 'react-native';
import axios from 'axios';

export default function App() {
  const [cep, setCep] = useState('');
  const [nome, setNome] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');

  // Endereço em campos separados para edição
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  const [erro, setErro] = useState('');

  // dispara automaticamente quando o CEP muda
  useEffect(() => {
    const cepLimpo = cep.replace(/\D/g, '');

    if (cepLimpo.length === 8) {
      buscarEndereco(cepLimpo);
    }
  }, [cep]);

  const buscarEndereco = async (cepLimpo) => {
    try {
      Keyboard.dismiss();
      const response = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);

      if (response.data.erro) {
        setErro('CEP não encontrado.');
        setLogradouro('');
        setBairro('');
        setCidade('');
        setUf('');
      } else {
        setErro('');
        // Preenche os campos com os dados da API
        setLogradouro(response.data.logradouro || '');
        setBairro(response.data.bairro || '');
        setCidade(response.data.localidade || '');
        setUf(response.data.uf || '');
      }
    } catch (error) {
      setErro('Ocorreu um erro na consulta. Tente novamente.');
    }
  };

  // máscara automática para data de nascimento
  const handleNascimentoChange = (text) => {
    let value = text.replace(/\D/g, ''); // só números

    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    if (value.length > 5) {
      value = value.slice(0, 5) + '/' + value.slice(5, 9);
    }

    setNascimento(value);
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
        onChangeText={handleNascimentoChange}
        keyboardType="numeric"
        maxLength={10}
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

      {erro ? <Text style={styles.error}>{erro}</Text> : null}

      {/* Inputs de endereço */}
      <TextInput
        style={styles.input}
        placeholder="Logradouro"
        value={logradouro}
        onChangeText={setLogradouro}
        placeholderTextColor="#fff"
      />

      <TextInput
        style={styles.input}
        placeholder="Bairro"
        value={bairro}
        onChangeText={setBairro}
        placeholderTextColor="#fff"
      />

      <TextInput
        style={styles.input}
        placeholder="Cidade"
        value={cidade}
        onChangeText={setCidade}
        placeholderTextColor="#fff"
      />

      <TextInput
        style={styles.input}
        placeholder="UF"
        value={uf}
        onChangeText={setUf}
        placeholderTextColor="#fff"
        maxLength={2}
      />
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
});
