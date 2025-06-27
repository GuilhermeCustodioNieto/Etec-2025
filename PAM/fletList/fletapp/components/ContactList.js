import React from "react";
import { View } from "react-native-web";
import { FlatList, SafeAreaView } from "react-native-web";
import Contact from "./Contact";

function ContactList({ data }) {
  return (
    <FlatList
      style={{ width: "100%" }}
      data={data}
      renderItem={({ item }) => (
        <Contact
          name={item.name}
          preview={item.preview}
          time={item.time}
          unreadMessages={item.unreadMessages}
          image={item.image}
        />
      )}
      keyExtractor={(item) => item.name}
    />
  );
}

export default ContactList;
