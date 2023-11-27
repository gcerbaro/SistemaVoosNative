import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import ListaVoos from "./voo/listar/ListarVoos";
import CriacaoVoo from "./voo/criar/criarVoo";
import EdicaoVoo from "./voo/editar/EditarVoo";

const Stack = createStackNavigator();

export default function VoosScreen() {
  return (
      <Stack.Navigator initialRouteName="ListarVoos">
           <Stack.Screen name="ListarVoos" component={ListaVoos} options={{ title: 'Voos' }} />
          <Stack.Screen name="EdicaoVoo" component={EdicaoVoo} options={{ title: 'Editar Voo' }} />
          <Stack.Screen name="CriacaoVoo" component={CriacaoVoo} options={{ title: 'Criar Voo' }} />
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
