import React from "react";
import { useState } from "react";

import { FlatList, ScrollView, View } from "react-native";
import { Head, CustomCard } from '../../components'
<<<<<<< HEAD
import { getAllPokemons } from '../../services/PokemonService'
=======
import { Pokemon } from "../../model/Pokemon";
>>>>>>> db21b4fa6d2d612a19dbc69b1c6c45d14334f4a7

const fake_data = [
    {
    id: 1,
    name: 'ola'
    }
]

export const Home = () => {
<<<<<<< HEAD
    const[pokemons,getAllPokemons] = useState([])
    const renderItem = ({ item }) => (
        <CustomCard item={item} />
    );
=======

>>>>>>> db21b4fa6d2d612a19dbc69b1c6c45d14334f4a7
    return(
        <View style={{flex:1}}>
            <Head/>
            <ScrollView horizontal={false} style={{ padding: 20 }}>
             <FlatList
                data={fake_data}
                renderItem={({item}) => <CustomCard item={item} />}
                keyExtractor={(pokemon: Pokemon, i) => pokemon.name}
            />

            </ScrollView>
        </View>
    )
}