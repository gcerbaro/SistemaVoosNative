import { StyleSheet, View, Text } from "react-native";

export default function CidadesScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Cidades Screen</Text>
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
  title: {
    fontSize:22,
    fontWeight: "bold"
  }
});


/* import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import ListaCidade from './cidade/listar/ListarCidade';
import EdicaoCidade from './cidade/editar/EdicaoCidade';
import CriacaoCidade from './cidade/criar/CriacaoCidade';

const Stack = createStackNavigator();

export default function TicketsScreen() {
  return (
    <Stack.Navigator initialRouteName="ListarCidades">
    <Stack.Screen name="ListarCidades" component={} options={{title: 'Cidades'}} />
    <Stack.Screen name="EdicaoCidades" component={}options={{title: 'Editar cidades'}}/>
    <Stack.Screen name="CriacaoCidades" component={} options={{ title: 'Criar cidade' }} />
</Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:22,
    fontWeight: "bold"
  }
});
 */

