import { View, Image, Text } from "react-native";

function Contact({ name, preview, time, unreadMessages, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.contactinfos}>
        <Text style={styles.subtitle}>{name}</Text>
        <Text style={styles.textPreview}>{preview}</Text>
      </View>
      <View style={styles.messageInfos}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.amountMessages}>{unreadMessages}</Text>
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
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  subtitle: {
    fontSize: 17,
    fontWeight: "bold",
  },

  textPreview: {
    fontSize: 15,
    color: "#888",
    marginTop: 5,
  },

  time: {
    fontSize: 14,
    color: "#28cb68",
    fontWeight: "600",

    marginBottom: 5,
  },

  messageInfos: {
    flex: 0.2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  amountMessages: {
    fontSize: 14,
    fontWeight: "600",
    backgroundColor: "#28cb68",
    width: 20,
    height: 20,
    borderRadius: 10,
    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: 20,
    color: "#fff",
  },
};

export default Contact;
