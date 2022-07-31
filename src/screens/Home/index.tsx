import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { CustomCard, Head } from '../../components';

import { Pokemon } from "../../model/Pokemon";
import { getAllPokemons } from '../../services/PokemonService';

export const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllPokemons();
        setPokemons(
          response.data.results
        )
      } catch (error: any) {
        console.log(error.message)
      }
    })()
  }, []) 

  return (
    <View style={{ flex: 1 }}>
      <Head />
      <ScrollView horizontal={false} style={{ padding: 20 }}>
        <FlatList
          data={pokemons}
          renderItem={({ item }) => <CustomCard item={item} />}
          keyExtractor={(pokemon: Pokemon) => pokemon.name}
        />

      </ScrollView>
    </View>
  )
}