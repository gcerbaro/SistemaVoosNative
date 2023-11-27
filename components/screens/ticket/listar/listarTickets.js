import styles from './styles';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { deletarTicket } from '../deletar/deletarTicket';
import { fetchTicket } from '../../../../services/TicketService';
import Button from '../../../button/Button';


function editarTicket(ticketSelecionado) {
    navigation.navigate('EdicaoTicket', { ticket: ticketSelecionado });
}

function criarTicket() {
    navigation.navigate('CriacaoTicket', { ticket: {} });
}

function ListaTicket({ navigation }) {
    const [tickets, setTickets] = useState([]);
    useEffect(() => {
        const carregarTickets = async () => {
            const data = await fetchTicket();
            setTickets(data);
        };
        carregarTickets();
    }, []);
    
    const CORES = ["#4e6c70", "#d3ffce"];
    const LETRAS = ["#ebf1ed", "#282828"];

    return (
        <View style={styles.container}>
            <View>
                <Button label={"Criar Ticket"} onPress={() => criarTicket()}></Button>
            </View>
            <FlatList
                data={tickets}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    const corItem = CORES[index % CORES.length];
                    const corLetra = LETRAS[index % LETRAS.length];
                    <TouchableOpacity onPress={() => editarTicket(item)} onLongPress={() => deletarTicket(item, tickets, setTickets)}>
                        <View style={{ ...styles.itemContainer, backgroundColor: corItem, color: corLetra }}>
                            <Text style={styles.itemTitle}>{item.valor}</Text>
                            <Text style={styles.itemTitle}>{item.assento}</Text>
                        </View>
                    </TouchableOpacity>
                }}
            />
        </View>
    );
}
export default ListaTicket;