import styles from './styles';
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { atualizarTicket } from '../../../../services/TicketService';

function edicaoTicket({ route, navigation }) {
    const [ticket, setTicket] = useState(route.params.ticket);
    const salvarEdicoes = async () => {
        try {
            await atualizarTicket(voo);
            alert('Ticket atualizado com sucesso!');
            navigation.goBack();
        } catch (error) {
            alert('Erro ao atualizar o ticket.');
            console.error("Erro ao atualizar ticket:", error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                value={ticket.assento}
                onChangeText={assento => setTicket({ ...ticket, assento})}
                placeholder="Assento"
                style={styles.input}
            />
            <TextInput
                value={ticket.valor}
                onChangeText={valor => setTicket({ ...ticket, valor })}
                placeholder="Valor"
                style={styles.input}
            />

            <Button title="Salvar" onPress={salvarEdicoes} />
        </View>);
}
export default edicaoTicket;       