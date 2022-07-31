import React from "react";
import { useState } from "react";

import { FlatList, ScrollView, View } from "react-native";
import { Head, CustomCard } from '../../components'

import { getAllPokemons } from '../../services/PokemonService'
import { Pokemon } from "../../model/Pokemon";


const fake_data = [
    {
    id: 1,
    name: 'ola'
    }
]

export const Home = () => {
    const[pokemons,getAllPokemons] = useState([])
    const renderItem = ({ item }) => (
        <CustomCard item={item} />
    );

    return(
        <View style={{flex:1}}>
            <Head/>
            <ScrollView horizontal={false} style={{ padding: 20 }}>
             <FlatList
                data={fake_data}
                renderItem={({item}) => <CustomCard item={item} />}
                keyExtractor={(pokemon: Pokemon) => pokemon.name}
            />

            </ScrollView>
        </View>
    )
}