import { deleteVoo } from "../../../../services/VooService";
import { Alert } from 'react-native';

async function deletar(id, voos, setVoos) {
    try {
        await deleteVoo(id);
        const vooAtualizado = voos.filter(voo => voo.id !== id);
        setVoos(vooAtualizado);
        Alert.alert('Sucesso', 'Voo deletado com sucesso!');
    } catch (error) {
        Alert.alert('Erro', 'Ocorreu um erro ao tentar deletar o voo.');
    }
}

export function deletarVoo(item, voos, setVoos) {
    Alert.alert(
        'Deletar Voo',
        `Você tem certeza que deseja deletar o voo de ${item.origem} para ${item.destino}?`,
        [
            { text: 'Não', style: 'cancel' },
            { text: 'Sim', onPress: () => deletar(item.id, voos, setVoos) },
        ],
        { cancelable: true }
    );
}