import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList";
import { FlatList, SafeAreaView } from "react-native-web";

export default function App() {
  const data = [
    {
      name: "Guilherme",
      preview: "Oii",
      time: "15:00",
      unreadMessages: 1,
      image: require("./assets/user_icon.png"),
    },
    {
      name: "Ana Clara",
      preview: "Vamos sair hoje?",
      time: "14:45",
      unreadMessages: 2,
      image: require("./assets/user_icon.png"),
    },
    {
      name: "Lucas",
      preview: "Me avisa quando chegar",
      time: "13:30",
      unreadMessages: 0,
      image: require("./assets/user_icon.png"),
    },
    {
      name: "Mariana",
      preview: "Obrigada :)",
      time: "12:20",
      unreadMessages: 1,
      image: require("./assets/user_icon.png"),
    },
    {
      name: "João Pedro",
      preview: "Beleza, fechado!",
      time: "11:10",
      unreadMessages: 0,
      image: require("./assets/user_icon.png"),
    },
    {
      name: "Carla",
      preview: "Tá online?",
      time: "10:05",
      unreadMessages: 4,
      image: require("./assets/user_icon.png"),
    },
    {
      name: "Felipe",
      preview: "Partiu jogar?",
      time: "Ontem",
      unreadMessages: 0,
      image: require("./assets/user_icon.png"),
    },
    {
      name: "Beatriz",
      preview: "Hahaha verdade!",
      time: "Ontem",
      unreadMessages: 3,
      image: require("./assets/user_icon.png"),
    },
    {
      name: "Renato",
      preview: "Bom dia!",
      time: "08:00",
      unreadMessages: 1,
      image: require("./assets/user_icon.png"),
    },
    {
      name: "Letícia",
      preview: "Já saiu a nota?",
      time: "07:45",
      unreadMessages: 2,
      image: require("./assets/user_icon.png"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ContactList data={data}></ContactList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
