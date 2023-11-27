import { deleteTicket } from "../../../../services/TicketService";
import { Alert } from 'react-native';

async function deletar(id, tickets, setTickets) {
    try {
        await deleteTicket(id);
        const ticketAtualizado = tickets.filter(ticket => ticket.id !== id);
        setTickets(ticketAtualizado);
        Alert.alert('Sucesso', 'Ticket deletado com sucesso!');
    } catch (error) {
        Alert.alert('Erro', 'Ocorreu um erro ao tentar deletar o ticket.');
    }
}

export function deletarTicket(item, tickets, setTickets) {
    Alert.alert(
        'Deletar Ticket',
        `Você tem certeza que deseja deletar o ticket?`,
        [
            { text: 'Não', style: 'cancel' },
            { text: 'Sim', onPress: () => deletar(item.id, tickets, setTickets) },
        ],
        { cancelable: true }
    );
}