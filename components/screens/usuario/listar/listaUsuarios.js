import styles from './styles';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchUsuarios } from '../../../../services/UsuarioService';
import { deletarUsuario } from '../deletar/deletarUsuario';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../../../button/Button';

function editarUsuario(usuarioSelecionado) {
    navigation.navigate('EdicaoUsuario', { usuario: usuarioSelecionado });
}

function criarUsuario() {
    navigation.navigate('CriacaoUsuario', { voo: {} });
}

function ListaUsuarios({ navigation }) {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        const carregarUsuarios = async () => {
            const data = await fetchUsuarios();
            setUsuarios(data);
        };
        carregarUsuarios();
    }, []);

    const CORES = ["#4e6c70", "#d3ffce"];
    const LETRAS = ["#ebf1ed", "#282828"];

    return (
        <View style={styles.container}>
            <View>
                <Button label={"Criar Usuario"} onPress={() => criarUsuario()}></Button>
            </View>
            <FlatList
                data={usuarios}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => {
                    const corItem = CORES[index % CORES.length];
                    const corLetra = LETRAS[index % LETRAS.length];
                    return (
                        <TouchableOpacity onPress={() => editarUsuario(item)} onLongPress={() => deletarUsuario(item, usuarios, setUsuarios)}>
                            <View style={{ ...styles.itemContainer, backgroundColor: corItem, color: corLetra }}>
                                <Text style={styles.itemTitle}>{item.nome}</Text>
                                <Text style={styles.itemTitle}>{item.cidade}</Text>
                                <Text style={styles.itemTitle}>{item.email}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}
export default ListaUsuarios;