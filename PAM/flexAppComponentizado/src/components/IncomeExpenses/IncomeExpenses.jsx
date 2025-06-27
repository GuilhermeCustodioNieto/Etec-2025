import React from "react";
import { View, Text } from "react-native";
import styles from "./IncomeExpensesStyle";

export default function IncomeExpenses() {
  return (
    <View style={styles.summary}>
      <View style={styles.summaryItem}>
        <View style={styles.labelRow}>
          <View style={styles.dot1} />
          <Text style={styles.summaryTitle}>INCOMES</Text>
        </View>
        <Text style={styles.summaryAmount}>$267</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.summaryItem}>
        <View style={styles.labelRow}>
          <View style={styles.dot2} />
          <Text style={styles.summaryTitle}>EXPENSES</Text>
        </View>
        <Text style={styles.summaryAmount}>$255</Text>
      </View>
    </View>
  );
}
