import React from "react";
import { View} from "react-native";
import Box from "./components/Box/Box.jsx";
import IncomeExpenses from "./components/IncomeExpenses/IncomeExpenses.jsx";
import LoremText from "./components/LoremText/LoremText.jsx";
import styles from "./style";

export default function App() {
  return (
    <View style={styles.container}>
      <Box />
      <IncomeExpenses />
      <LoremText />
    </View>
  );
}
