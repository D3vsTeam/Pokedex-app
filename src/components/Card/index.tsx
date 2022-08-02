import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, TouchableOpacityProps, Image, FlatList, View } from "react-native";
import { Pokemon } from "../../model/Pokemon";
import { getPokemonByName } from "../../services/PokemonService";
import { CustomId, CustomFrame, CustomName } from './style'
import { CardType } from '../CardType'

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
          <View style={{flexDirection: 'row'}}>
            <View>
              <CustomId>{pokemon.id}</CustomId>
              <CustomName>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</CustomName>
            </View>
            <Image style={{backgroundColor: 'transparent',height: 100,width:150}} source={{uri: pokemon.sprites.front_default}}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <FlatList
            style={{flexDirection: 'row'}}
            data={pokemon.types}
            renderItem={({item}) => <CardType pokemonT={pokemon} item={item.type.name}/>}
            />
          </View>
        </CustomFrame>
      }
    </>
  )
}