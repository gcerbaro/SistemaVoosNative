import styles from './styles';
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { atualizarUsuario } from '../../../../services/UsuarioService';

function EdicaoUsuario({ route, navigation }) {
    const [usuario, setUsuario] = useState(route.params.usuario);
    const salvarEdicoes = async () => {
        try {
            await atualizarUsuario(usuario);
            alert('Usuario atualizado com sucesso!');
            navigation.goBack();
        } catch (error) {
            alert('Erro ao atualizar o usuario.');
            console.error("Erro ao atualizar usuario:", error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                value={usuario.nome}
                onChangeText={nome => setUsuario({ ...usuario, nome })}
                placeholder="nome"
                style={styles.input}
            />
            <TextInput
                value={usuario.email}
                onChangeText={email => setUsuario({ ...usuario, email })}
                placeholder="email"
                style={styles.input}
            />
            <TextInput
                value={usuario.senha}
                onChangeText={senha => setUsuario({ ...usuario, senha })}
                placeholder="senha"
                style={styles.input}
            />
            <TextInput
                value={usuario.cidade}
                onChangeText={cidade => setUsuario({ ...usuario, cidade })}
                placeholder="cidade"
                style={styles.input}
            />

            <Button title="Salvar" onPress={salvarEdicoes} />
        </View>);
}
export default EdicaoUsuario;       