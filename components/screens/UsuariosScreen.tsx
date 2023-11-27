import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import ListaUsuarios from "./usuario/listar/listaUsuarios";
import criacaoUsuario from "./usuario/criar/criarUsuario";
import EdicaoUsuario from "./usuario/editar/EditarUsuario";

const Stack = createStackNavigator();

export default function UsuariosScreen() {
  return (
    <Stack.Navigator initialRouteName="ListarUsuarios">
          <Stack.Screen name="ListarUsuarios" component={ListaUsuarios} options={{title: 'Usuarios'}} />
          <Stack.Screen name="EdicaoUsuarios" component={EdicaoUsuario}options={{title: 'Editar usuario'}}/>
          <Stack.Screen name="CriacaoUsuario" component={criacaoUsuario} options={{ title: 'Criar Usuario' }} />
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
