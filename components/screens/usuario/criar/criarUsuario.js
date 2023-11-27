import styles from './styles';
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { criarUsuario } from '../../../../services/UsuarioService';

function criacaoUsuario({ navigation }) {

    const [nome, setNome] = useState ('')
    const [email, setEmail]  = useState ('')
    const [senha, setSenha]  = useState ('')
    const [cidade, setCidade]  = useState ('')
    
    const saveAll = async () => {

        const payLoad = {
            nome: nome,
            email: email,
            senha: senha,
            cidade: cidade
        }

        try {
            await criarUsuario(payLoad);
            alert('Usuario criado com sucesso!');
            navigation.goBack();
        } catch (error) {
            alert('Erro ao criar usuario.');
            console.error("Erro ao criar usuario:", error);
        }
    };



    return (
        <View style={styles.container}>
            <TextInput
                value={nome}
                onChangeText={nome => setNome(nome)}
                placeholder="nome"
                style={styles.input}
            />
            <TextInput
                value={email}
                onChangeText={email => setEmail(email)}
                placeholder="email"
                style={styles.input}
            />
            <TextInput
                value={senha}
                onChangeText={senha => setSenha(senha)}
                placeholder="Senha"
                style={styles.input}
            />
            <TextInput
                value={cidade}
                onChangeText={cidade => setCidade(cidade)}
                placeholder = "Cidade"
                style={styles.input}
            />

            <Button title="Criar" onPress={saveAll} />
        </View>);
}

export default criacaoUsuario;       