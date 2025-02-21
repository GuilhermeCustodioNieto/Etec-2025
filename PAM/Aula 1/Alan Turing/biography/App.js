import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alan Turing</Text>
      <Text>Conheça a história do pai da computação</Text>

      <Image 
        style={styles.image}
        source={require('./assets/images/alan-turing.png')}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 350
  },
  title: {
    fontSize: 50
  }
});
