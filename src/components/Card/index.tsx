import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { Pokemon } from "../../model/Pokemon";
import { getPokemonByName } from "../../services/PokemonService";
import { CustomId, CustomFrame, CustomName } from './style'

type CustomCardType = TouchableOpacityProps & {
  item: Pokemon
}

export const CustomCard: React.FC<CustomCardType> = ({ item }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonByName(item.name)
        setPokemon(response.data)
      } catch (error) {

      }
    })()
  }, [])

  return (
    <>
      {pokemon &&
        <CustomFrame type={pokemon.types[0].type.name}>
          <CustomId>{pokemon.id}</CustomId>
          <CustomName>{pokemon.name}</CustomName>
        </CustomFrame>
      }
    </>
  )
}