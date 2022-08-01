import React from "react";
import { CustomCardType} from './style'
import { Text, ViewProps } from "react-native";
import { Pokemon } from "../../model/Pokemon";

type CustomCardType = ViewProps & {
    item: string
    pokemonT: Pokemon
  }

export const CardType: React.FC<CustomCardType> = ({item,pokemonT}) => {
    return(
        <CustomCardType type={pokemonT.types[0].type.name}>
            <Text>{item}</Text>
        </CustomCardType>
    )
}