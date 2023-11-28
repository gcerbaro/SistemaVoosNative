import axios from 'axios';
import Cidade from '../core/Cidade';

interface ApiResponse { content: Cidade[];
}

const headers = {
    headers : {
        'Access-Control-Allow-Origin' : '*',
    }
}

const BASE_URL = 'http://localhost:8080';
//Se tiver rodando no mesmo PC, substitui por http://localhost:8080
//Se for em outro PC pega o IPv4 de quem estiver rodando a API, como no exemplo de cima

export const fetchEventos = async (): Promise<Cidade[]> => {
    try {
        const response = await axios.get<ApiResponse>(`${BASE_URL}/cidades`, headers);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar cidades');
    }
};
