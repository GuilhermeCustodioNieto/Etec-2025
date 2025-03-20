import { StyleSheet, View, ScrollView } from "react-native";
import Title from "./src/components/Title/";
import Form from "./src/components/Form";
import { useRef } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Title> </Title>
      <Form></Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4a78a6",
    paddingTop: 80,
  },
});
