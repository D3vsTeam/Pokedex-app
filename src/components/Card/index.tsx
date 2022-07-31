import React from "react";
import { TouchableOpacity,Text, TouchableOpacityProps } from "react-native";
import { Pokemon } from "../../model/Pokemon";


type CustomCardType = TouchableOpacityProps &{
    item: Pokemon
}

export const CustomCard: React.FC<CustomCardType> = ({item}) =>{
    return(
        <TouchableOpacity>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    )
}