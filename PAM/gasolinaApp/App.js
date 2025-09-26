import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

export default function App() {
  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [resultado, setResultado] = useState(null);

  const verificarCombustivel = () => {
    const valorAlcool = parseFloat(alcool);
    const valorGasolina = parseFloat(gasolina);

    if (isNaN(valorAlcool) || isNaN(valorGasolina) || valorGasolina === 0) {
      setResultado(
        "Por favor, insira valores válidos para ambos os combustíveis."
      );
      return;
    }

    const divisao = valorAlcool / valorGasolina;

    if (divisao < 0.7) {
      setResultado("O álcool é a melhor opção!");
    } else {
      setResultado("A gasolina é a melhor opção!");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Qual Combustível Abastecer?</Text>

      <TextInput
        style={styles.input}
        placeholder="Valor do Álcool"
        keyboardType="numeric"
        value={alcool}
        onChangeText={setAlcool}
        placeholderTextColor="#4CAF50"
      />

      <TextInput
        style={styles.input}
        placeholder="Valor da Gasolina"
        keyboardType="numeric"
        value={gasolina}
        onChangeText={setGasolina}
        placeholderTextColor="#4CAF50"
      />

      <TouchableOpacity style={styles.button} onPress={verificarCombustivel}>
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableOpacity>

      {resultado && <Text style={styles.resultado}>{resultado}</Text>}

      {resultado === "O álcool é a melhor opção!" && (
        <View style={styles.imagemContainer}>
          <Image
            source={{
              uri: "https://greenviewgv.com.br/wp-content/uploads/2021/05/166-Etanol-POST-1024x1024.jpg",
            }}
            style={styles.imagem}
          />
        </View>
      )}

      {resultado === "A gasolina é a melhor opção!" && (
        <View style={styles.imagemContainer}>
          <Image
            source={{
              uri: "https://www.portaldotransito.com.br/wp-content/uploads/2024/08/combustivel-compensa-1024x683.jpg",
            }}
            style={styles.imagem}
          />
          <Text style={styles.gasolinaTexto}>Gasolina é melhor</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4CAF50",
    marginVertical: 30,
    textAlign: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#4CAF50",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    color: "#000",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  resultado: {
    marginTop: 20,
    color: "#4CAF50",
    fontSize: 20,
    textAlign: "center",
  },
  imagemContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  imagem: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  gasolinaTexto: {
    position: "absolute",
    top: 120,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
