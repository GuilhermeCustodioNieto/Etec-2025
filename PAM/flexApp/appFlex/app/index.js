import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";


const AppFlex = () => {
  return (
    <View style={styles.container}>
      {/* Card */}
      <View style={styles.background1}>

        <View style={styles.box1}>
          <View style={styles.organizador1}>
            <View></View>
            <View>
              <Text style={styles.text}>Lorem Ipsum dolot</Text>
            </View>
            <View>
              <Image source={require('../assets/engrenagem.png')} style={styles.icon2} />
            </View>
          </View>
          <View>
            <Text style={styles.textoValor}>$236,678.25</Text>
          </View>
        </View>

        <View style={styles.box2}>
          <View style={styles.Card}>
            <View style={styles.cardMin}>
              <Image source={require('../assets/pesquisa.png')} style={styles.icon} />
            </View>
            <Text style={styles.descricao}>
              Lorem
            </Text>

          </View>

          <View style={styles.Card}>
            <View style={styles.cardMin}>
              <Image source={require('../assets/grafico.png')} style={styles.icon} />
            </View>
            <Text style={styles.descricao}>
              Ipsum
            </Text>

          </View>

          <View style={styles.Card}>
            <View style={styles.cardMin}>
              <Image source={require('../assets/engrenagem.png')} style={styles.icon} />
            </View>
            <Text style={styles.descricao}>
              Dolor
            </Text>

          </View>

        </View>
      </View>

      <View style={styles.container2}>
        <View style={styles.background2}>

          <View style={styles.organizador2}>
            <View style={styles.organizador3}>
              <View style={styles.bola1}></View>
              <Text style={styles.titulo}>INCOMES</Text>
            </View>
            <Text style={styles.valor2}>
              $267
            </Text>

          </View>

          <View style={styles.divisor}>

          </View>

          <View style={styles.organizador2}>
            <View style={styles.organizador3}>
              <View style={styles.bola2}></View>
              <Text style={styles.titulo}>EXPENSES</Text>
            </View>
            <Text style={styles.valor2}>
              $255
            </Text>

          </View>

        </View>

        <View >
          <Text style={styles.texto}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus ligula quis nisi interdum consectetur. Interdum et malesuada fames ac.


          </Text>
          <Text style={styles.texto}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada justo gravida sapien lacinia dapibus. Vivamus efficitur lectus nec consectetur.

</Text>

        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  container2: {
    display: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    marginTop: 20
  },

  box1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    height: 180,
    width: 350,
    borderRadius: 15,
    margin: 15
  },

  organizador1: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 5
  },

  textoValor: {
    color: "#222",
    fontSize: 32,
    fontWeight: "bold"
  },

  text: {
    color: "#222",
    fontSize: 22,
  },

  background1: {
    gap: 15,
    backgroundColor: "#e5296b",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: "100%",
    height: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  icon: {
    height: 50,
    width: 50,
  },

  icon2: {
    height: 30,
    width: 30,
  },

  cardMin: {
    margin: 10,
    backgroundColor: "#fff",
    height: 90,
    width: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px"
  },

  box2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
  },

  Card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  descricao: {
    color: "#eee",
    fontSize: 15,
  },

  background2: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#eee",
    margin: 10,
  },

  organizador2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },

  organizador3: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  bola1: {
    height: 25,
    width: 25,
    borderRadius: "50%",
    backgroundColor: "#ed804a",

  },

  bola2: {
    height: 25,
    width: 25,
    borderRadius: "50%",
    backgroundColor: "#444",

  },

  titulo: {
    color: "#222",
    fontSize: 26,
  },

  valor2: {
    fontSize: 40,
    color: "#222",
    fontWeight: "bold"
  },

  divisor: {
    height: "100%",
    width: 1,
    backgroundColor: "#333"
  },

  texto: {
    fontSize: 16,
    color: "#222",
    textAlign: "center"
  }

});

export default AppFlex;
