import styles from './styles';
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { criarTicket } from '../../../../services/TicketService';

function criacaoTicket({ navigation }) {

    const [usuarioID, setUsuarioID] = useState ('')
    const [vooID, setVooID]  = useState ('')
    const [assento, setAssento]  = useState ('')
    const [valor, setValor]  = useState ('')
    
    const saveAll = async () => {

        const payLoad = {
            usuarioID: usuarioID,
            vooID: vooID,
            assento: assento,
            valor: valor
        }

        try {
            await criarTicket(payLoad);
            alert('Ticket criado com sucesso!');
            navigation.goBack();

        } catch (error) {
            alert('Erro ao criar o ticket.');
            console.error("Erro ao criar ticket:", error);
        }
    };



    return (
        <View style={styles.container}>
            <TextInput
                value={usuarioID}
                onChangeText={usuarioID => setUsuarioID(usuarioID)}
                placeholder="Usuario"
                style={styles.input}
            />
            <TextInput
                value={vooID}
                onChangeText={vooID => setVooID(vooID)}
                placeholder="Voo"
                style={styles.input}
            />
            <TextInput
                value={assento}
                onChangeText={assento => setAssento(assento)}
                placeholder="Assento"
                style={styles.input}
            />
            <TextInput
                value={valor}
                onChangeText={valor => setValor(valor)}
                placeholder="Valor"
                style={styles.input}
            />

            <Button title="Criar" onPress={saveAll} />
        </View>);
}

export default criacaoTicket;       