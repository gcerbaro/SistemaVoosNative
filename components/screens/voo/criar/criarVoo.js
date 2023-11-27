import styles from './styles';
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { criarVoo } from '../../../../services/VooService';

function CriacaoVoo({ navigation }) {

    const [origem, setOrigem] = useState ('')
    const [destino, setDestino]  = useState ('')
    const [partida, setPartida]  = useState ('')
    const [nassentos, setNassentos]  = useState ('')
    
    const saveAll = async () => {

        const payLoad = {
            origem: origem,
            destino: destino,
            partida: partida,
            nassentos: nassentos
        }

        try {
            await criarVoo(payLoad);
            alert('Voo criado com sucesso!');
            navigation.goBack();

        } catch (error) {
            alert('Erro ao criar o voo.');
            console.error("Erro ao criar voo:", error);
        }
    };



    return (
        <View style={styles.container}>
            <TextInput
                value={origem}
                onChangeText={origem => setOrigem(origem)}
                placeholder="Origem"
                style={styles.input}
            />
            <TextInput
                value={destino}
                onChangeText={destino => setDestino(destino)}
                placeholder="Destino"
                style={styles.input}
            />
            <TextInput
                value={partida}
                onChangeText={partida => setPartida(partida)}
                placeholder="Data de partida"
                style={styles.input}
            />
            <TextInput
                value={nassentos}
                onChangeText={nassentos => setNassentos(nassentos)}
                placeholder="Numero de assentos"
                style={styles.input}
            />

            <Button title="Criar" onPress={saveAll} />
        </View>);
}

export default CriacaoVoo;       