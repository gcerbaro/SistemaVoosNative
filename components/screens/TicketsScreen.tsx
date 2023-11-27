import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import ListaTicket from "./ticket/listar/listarTickets";
import criacaoTicket from "./ticket/criar/criarTicket";
import edicaoTicket from "./ticket/editar/EditarTicket";

const Stack = createStackNavigator();

export default function TicketsScreen() {
  return (
    <Stack.Navigator initialRouteName="ListarTickets">
    <Stack.Screen name="ListarTickets" component={ListaTicket} options={{title: 'Tickets'}} />
    <Stack.Screen name="EdicaoTickets" component={edicaoTicket}options={{title: 'Editar tickets'}}/>
    <Stack.Screen name="CriacaoTicket" component={criacaoTicket} options={{ title: 'Criar Ticket' }} />
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
