import styles from './styles';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { fetchVoos } from '../../../../services/VooService';
import { deletarVoo } from '../deletar/deletarVoo';
import CriacaoVoo from '../criar/criarVoo';
import Button from '../../../button/Button';

function ListaVoos({ navigation }) {

    function editarVoo(vooSelecionado) {
        navigation.navigate('EdicaoVoo', { voo: vooSelecionado });
    }

    function criarVoo() {
        navigation.navigate('CriacaoVoo', { voo: {} });
    }

    const [voos, setVoos] = useState([]);
    useEffect(() => {
        const carregarVoos = async () => {
            const data = await fetchVoos();
            setVoos(data);
        };
        carregarVoos();
    }, []);

    const CORES = ["#4e6c70", "#d3ffce"];
    const LETRAS = ["#ebf1ed", "#282828"];

    return (
        <View style={styles.container}>
            <View>
                <Button label={"Criar Voo"} onPress={() => criarVoo()}></Button>
            </View>
            <FlatList
                data={voos}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => {
                    const corItem = CORES[index % CORES.length];
                    const corLetra = LETRAS[index % LETRAS.length];
                    <TouchableOpacity onPress={() => editarVoo(item)} onLongPress={() => deletarVoo(item, voos, setVoos)}>
                        <View style={{ ...styles.itemContainer, backgroundColor: corItem, color: corLetra }}>
                            <Text style={styles.itemTitle}>Origem: {item.origem}</Text>
                            <Text style={styles.itemTitle}>Destino: {item.destino}</Text>
                            <Text style={styles.itemDate}>{item.partida}</Text>
                        </View>
                    </TouchableOpacity>
                }}
            />
        </View>
    );
}
export default ListaVoos;