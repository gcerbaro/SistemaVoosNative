import axios from 'axios';
import Usuario from '../core/Usuario';

interface ApiResponse {
    content: Usuario[];
}

/*
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6IjEyMzEyM0B1cGYuYnIiLCJleHAiOjE3MDA5NzE1NDR9.ZRrydl2Wt7258_8pJyX0YUdeBlUv0AEZupOOI0TR9ww'


const headers = {
    headers: {
        'Acess-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-with, Content-Type, Accept',
        'Authorization': `${token}`
    }
}*/

const BASE_URL = 'http://localhost:8080';

export const fetchUsuarios = async (): Promise<Usuario[]> => {
    try {
        const response = await axios.get<ApiResponse>(`${BASE_URL}/usuarios`);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar usuarios');
    }
};

export const criarUsuario = async (usuario: Usuario): Promise<void> => {
    try {
        await axios.post(`${BASE_URL}/usuarios`);
    } catch (error) {
        throw new Error('Erro ao criar usuario');
    }
};

export const atualizarUsuario = async (usuario: Usuario): Promise<void> => {
    try {
        await axios.put(`${BASE_URL}/usuarios/${usuario.id}`, usuario);
    } catch (error) {
        throw new Error('Erro ao atualizar usuario');
    }
};

export const deleteUsuario = async (id: number) => {
    try {
        await axios.delete(`${BASE_URL}/usuarios/${id}`);
    } catch (error) {
        throw new Error('Erro ao deletar usuario');
    }
};

