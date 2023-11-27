import axios from 'axios';
import Ticket from '../core/Ticket';

interface ApiResponse { content: Ticket[];
}

const BASE_URL = 'http://localhost:8080';

export const fetchTicket = async (): Promise<Ticket[]> => {
    try {
        const response = await axios.get<ApiResponse>(`${BASE_URL}/ticket`);
        return response.data.content;
    } catch (error) {
        throw new Error('Erro ao buscar tickets');
    }
};

export const criarTicket = async (ticket: Ticket): Promise<void> => {
    try {
        await axios.post(`${BASE_URL}/ticket`, ticket);
    } catch (error) {
        throw new Error('Erro ao criar ticket');
    }
};

export const atualizarTicket = async (ticket: Ticket): Promise<void> => {
    try {
        await axios.put(`${BASE_URL}/ticket/${ticket.id}`, ticket);
    } catch (error) {
        throw new Error('Erro ao atualizar o ticket');
    }
};

export const deleteTicket = async (id: number) => {
    try {
        await axios.delete(`${BASE_URL}/ticket/${id}`);
    } catch (error) {
        throw new Error('Erro ao deletar ticket');
    }
};
