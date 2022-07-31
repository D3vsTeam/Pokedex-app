import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View,Text } from "react-native";
import { Head, CustomCard } from '../../components'

import { getAllPokemons } from '../../services/PokemonService'
import { Pokemon } from "../../model/Pokemon";
import { useGetData } from "../../services/PokemonService";

const fake_data = [
    {
    id: 1,
    name: 'ola'
    }
]

export const Home = () => {
    const { getPokemons } = useGetData()
    const [pokes, setPokemons] = useState([])
    
    const callGetData = async () => {
        const pokeResponse = await getPokemons()

        if (!pokeResponse.error) {
            setPokemons(pokeResponse)
        }
    }

    useEffect(() => {
        callGetData()
    }, [])
    return(
        <View style={{flex:1}}>
            <Head/>
            <ScrollView horizontal={false} style={{ padding: 20 }}>
             <FlatList
                data={pokes}
                renderItem={({item}) => <Text>TESTE</Text>}
                keyExtractor={(pokemon: Pokemon, i) => pokemon.name}
            />

            </ScrollView>
        </View>
    )
}