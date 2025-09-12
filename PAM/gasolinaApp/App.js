import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native/types_generated/index";

export default function App() {
  const [alcool, setAlcool] = useState();
  const [gasolina, setGasolina] = useState();

  function calcular() {
    if (alcool / gasolina >= 0.7) {
      alert("Melhor utilizar gasolina");
    } else {
      alert("Melhor utilizar álcool");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite o valor do álcool"
        value={alcool}
        onChangeText={(text) => setAlcool(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Digite o valor da gasolina"
        value={gasolina}
        onChangeText={(text) => setAlcool(text)}
        keyboardType="numeric"
      />

      <Button title="Calcular" onPress={calcular} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
