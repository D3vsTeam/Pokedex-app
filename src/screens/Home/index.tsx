import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { CustomCard, Header } from '../../components';

import { Pokemon } from "../../model/Pokemon";
import { getAllPokemons } from '../../services/PokemonService';

export const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState('')

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

  const filteredPokemons = pokemons
    ? pokemons.filter(pokemon => pokemon.name.includes(search) || pokemon.url?.split('/')[6].startsWith(search))
    : []

  return (
    <View style={{ flex: 1 }}>
      <Header handleSearch={(input) => setSearch(input)} />
      <ScrollView horizontal={false} style={{ padding: 20 }}>
        <FlatList
          data={filteredPokemons}
          renderItem={({ item }) => <CustomCard item={item} />}
          keyExtractor={(pokemon: Pokemon) => pokemon.name}
        />
      </ScrollView>
    </View>
  )
}