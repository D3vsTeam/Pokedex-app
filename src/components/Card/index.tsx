import React from "react";
import { TouchableOpacity,Text, TouchableOpacityProps } from "react-native";


type CustomCardType = TouchableOpacityProps &{
    item: Pokemon
}

export const CustomCard: React.FC<TouchableOpacityProps> = ({item}) =>{
    return(
        <TouchableOpacity>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    )
}