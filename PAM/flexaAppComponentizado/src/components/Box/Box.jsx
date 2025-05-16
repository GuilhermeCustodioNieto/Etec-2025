import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./BoxStyle";

export default function Box() {
  return (
    <View style={styles.header}>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceTitle}>Lorem ipsum dolot</Text>
        <Text style={styles.balanceAmount}>$236,678.25</Text>
        <FontAwesome name="cog" style={styles.settingsIcon} />
      </View>

      <View style={styles.navButtons}>
        <TouchableOpacity style={styles.button}>
        <FontAwesome name="search" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Lorem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <FontAwesome name="bar-chart" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Ipsum</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <FontAwesome name="cog" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Dolor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}