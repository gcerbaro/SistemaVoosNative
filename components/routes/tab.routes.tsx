import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome, FontAwesome5, MaterialCommunityIcons, Entypo, Feather} from '@expo/vector-icons';
import CidadesScreen from '../screens/CidadesScreen';
import TicketsScreen from '../screens/TicketsScreen';
import UsuariosScreen from '../screens/UsuariosScreen';
import VoosScreen from '../screens/VoosScreen';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name='voos' component={VoosScreen} options={{
                tabBarIcon:({color, size}) => <MaterialCommunityIcons name='airplane' color={color} size={size}/>,
                tabBarLabel: 'Voos'
            }} />
            <Tab.Screen name='tickets' component={TicketsScreen} options={{
                tabBarIcon:({color, size}) => <Entypo name='ticket' color={color} size={size}/>,
                tabBarLabel: 'Tickets'
            }}/>
            <Tab.Screen name='usuarios' component={UsuariosScreen} options={{
                tabBarIcon:({color, size}) => <FontAwesome5 name='user-friends' color={color} size={size}/>,
                tabBarLabel: 'Usuarios'
            }}/>
            <Tab.Screen name='cidades' component={CidadesScreen} options={{
                tabBarIcon:({color, size}) => <FontAwesome5 name='city' color={color} size={size}/>,
                tabBarLabel: 'Cidades'
            }}/>
        </Tab.Navigator>
    )
}