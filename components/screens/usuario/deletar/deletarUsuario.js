import { deleteUsuario } from "../../../../services/UsuarioService";
import { Alert } from 'react-native';

async function deletar(id, usuarios, setUsuarios) {
    try {
        await deleteUsuario(id);
        const userAtualizado = usuarios.filter(usuario => usuario.id !== id);
        setUsuarios(userAtualizado);
        Alert.alert('Sucesso', 'Usuario deletado com sucesso!');
    } catch (error) {
        Alert.alert('Erro', 'Ocorreu um erro ao tentar deletar o Usuario.');
    }
}

export function deletarUsuario(item, usuarios, setUsuarios) {
    Alert.alert(
        'Deletar Voo',
        `Você tem certeza que deseja deletar o usuario ${item.nome}?`,
        [
            { text: 'Não', style: 'cancel' },
            { text: 'Sim', onPress: () => deletar(item.id, usuarios, setUsuarios) },
        ],
        { cancelable: true }
    );
}