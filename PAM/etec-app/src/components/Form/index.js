import { React, useState, useRef } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import ResultMedia from "./ResultMedia";
import styles from "./style";

function index() {
  const [nota1, setNota1] = useState(null);
  const [nota2, setNota2] = useState(null);
  const [nota3, setNota3] = useState(null);
  const [nota4, setNota4] = useState(null);
  const [messageMedia, setMessageMedia] = useState("Preencha as suas notas");
  const [media, setMedia] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function MediaCalculator() {
    setMedia(
      (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
    );

    return;
  }

  function defineMessage() {
    if (media < 4) {
      setMessageMedia(`Você foi reprovado`);
    } else if (media > 4 && media < 6) {
      setMessageMedia(`Você está de recuperação`);
    } else {
      setMessageMedia(`Você foi aprovado`);
    }
  }

  function validationMedia() {
    if (nota1 != null && nota2 != null && nota3 != null && nota4 != null) {
      MediaCalculator();
      setNota1(null);
      setNota2(null);
      setNota3(null);
      setNota4(null);
      setTextButton("Calcular novamente");
      defineMessage();

      return;
    }

    setMedia(null);
    setTextButton("Calcular");
    setMessageMedia("Preencha as quatro notas");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Nota 1</Text>
        <TextInput
          onChangeText={setNota1}
          placeholder="Ex. 8.5"
          keyboardType="numeric"
          value={nota1}
          style={styles.textInput}
        ></TextInput>
        <Text style={styles.formLabel}>Nota 2</Text>
        <TextInput
          onChangeText={setNota2}
          placeholder="Ex. 9"
          keyboardType="numeric"
          value={nota2}
          style={styles.textInput}
        ></TextInput>
        <Text style={styles.formLabel}>Nota 3</Text>
        <TextInput
          onChangeText={setNota3}
          placeholder="Ex. 10"
          keyboardType="numeric"
          value={nota3}
          style={styles.textInput}
        ></TextInput>
        <Text style={styles.formLabel}>Nota 4</Text>
        <TextInput
          onChangeText={setNota4}
          placeholder="Ex. 2.1"
          keyboardType="numeric"
          value={nota4}
          style={styles.textInput}
        ></TextInput>
        <TouchableOpacity
          onPress={() => {
            validationMedia();
          }}
          style={styles.buttonCalculator}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultMedia
        messageResultMedia={messageMedia}
        resultMedia={media}
      ></ResultMedia>
    </View>
  );
}

export default index;
