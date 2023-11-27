import styles from './styles';
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { atualizarVoo } from '../../../../services/VooService';

function EdicaoVoo({ route, navigation }) {
    const [voo, setVoo] = useState(route.params.voo);
    const salvarEdicoes = async () => {
        try {
            await atualizarVoo(voo);
            alert('Voo atualizado com sucesso!');
            navigation.goBack();
        } catch (error) {
            alert('Erro ao atualizar o voo.');
            console.error("Erro ao atualizar voo:", error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                value={voo.origem}
                onChangeText={origem => setVoo({ ...voo, origem })}
                placeholder="Origem"
                style={styles.input}
            />
            <TextInput
                value={voo.destino}
                onChangeText={destino => setVoo({ ...voo, destino })}
                placeholder="Destino"
                style={styles.input}
            />

            <Button title="Salvar" onPress={salvarEdicoes} />
        </View>);
}
export default EdicaoVoo;       