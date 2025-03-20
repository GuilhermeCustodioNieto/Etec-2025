import { React, useState } from "react";
import { View, Text } from "react-native";
import styles from "./style";

function index(props) {
  return (
    <View style={styles.resultMedia}>
      <Text style={styles.information}>{props.messageResultMedia}</Text>
      <Text style={styles.numberMedia}>{props.resultMedia}</Text>
    </View>
  );
}

export default index;
