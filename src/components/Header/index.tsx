import React from "react";
import { View,Text,TextInput } from "react-native";
import  {PokemonText, Detalhe, InputPokemon, Icon, Search} from './style';




export const Head = () => {
    return (
        <View style={{padding:20}}>
            <Icon name="text-long" size={24} color="black" />
            <PokemonText>Pokedex</PokemonText>
            <Detalhe>Procure pelo seu pokemon pelo nome ou ID</Detalhe>
            <View style = {{flexDirection: "row"}}>
                <Search name="search" size={50} color="black"/>
                <InputPokemon/>
            </View>

        </View>
        

    )
}