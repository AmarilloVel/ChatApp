import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { database } from './config/firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function App() {
  const Subir = () => {
    const collect = doc(database,"salas","jesuhhs");
        const datos = {
            "owner" : 20,
        }  
    setDoc(collect,datos)
    .then(()=> console.log("registrado"))
    .catch((error) => console.log(error));
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Subir()}>
        <Text>Subir</Text>
      </TouchableOpacity>
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
});
