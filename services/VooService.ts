import axios from 'axios';
import Voo from '../core/Voo';

interface ApiResponse {
    content: Voo[];
}

const BASE_URL = 'http://localhost:8080';

export const fetchVoos = async (): Promise<Voo[]> => {
    try {
        const response = await axios.get<ApiResponse>(`${BASE_URL}/voos`);
        return response.data.content;
    } catch (error) {
        throw new Error('Erro ao buscar voos');
    }
};

export const criarVoo = async (voo: Voo): Promise<void> => {
    try {
        await axios.post(`${BASE_URL}/voos`, voo);
    } catch (error) {
        throw new Error('Erro ao criar voo');
    }
};

export const buscarPorId = async (voo: Voo): Promise<void> => {
    try {
        await axios.get(`${BASE_URL}/voos/${voo.id}`);
    } catch (error) {
        throw new Error('Erro ao buscar voo');
    }
};

export const atualizarVoo = async (voo: Voo): Promise<void> => {
    try {
        await axios.put(`${BASE_URL}/voos/${voo.id}`, voo);
    } catch (error) {
        throw new Error('Erro ao atualizar o voo');
    }
};

export const deleteVoo = async (id: number) => {
    try {
        await axios.delete(`${BASE_URL}/voos/${id}`);
    } catch (error) {
        throw new Error('Erro ao deletar voo');
    }
};
