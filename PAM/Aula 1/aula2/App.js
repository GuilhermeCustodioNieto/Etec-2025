import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text >Guilherme</Text>
      <Text style={styles.tituloTexto}>hello, world</Text>

      <View>
        <Image
          style={styles.imagem}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs731nqGflTclgoWmkvwzkzqmOXJ_j3emixw&s' }}>
            
        </Image>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloTexto: {
    color: '#f00',
    fontSize: 20
  },
  imagem: {
    width: 500,
    height: 500
  },

});
