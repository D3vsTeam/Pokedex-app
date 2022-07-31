import React from "react";
import { View,Text,TextInput } from "react-native";
import  {PokemonText, Detalhe, InputPokemon, Icon} from './style';



export const Head = () => {
    return (
        <View>
            <PokemonText>Pokedex</PokemonText>
            <Detalhe>Procure pelo seu pokemon pelo nome ou ID</Detalhe>
            <InputPokemon/>
            <Icon name="text-long" size={24} color="black" />

        </View>
    )
}