import { View, Image, Text } from "react-native";

function Contact() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/user_icon.png")}
      ></Image>
      <View style={styles.contactinfos}>
        <Text style={styles.subtitle}>Name</Text>
        <Text>Message</Text>
      </View>
      <View>
        <Text>15:00</Text>
        <Text>1</Text>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    width: "100%",
    padding: 10,
    maxHeight: 90,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  contactinfos: {
    width: "70%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  subtitle: {
    fontSize: 17,
    fontWeight: "bold",
  },
};

export default Contact;
