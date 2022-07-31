import React from "react";
import { TouchableOpacity,Text, TouchableOpacityProps } from "react-native";
import { Pokemon } from "../../model/Pokemon";
import { CustomId,CustomFrame,CustomName} from './style'

type CustomCardType = TouchableOpacityProps &{
    item: Pokemon
}

export const CustomCard: React.FC<CustomCardType> = ({item}) =>{
    return(
        <CustomFrame>
            <CustomId>#0001</CustomId>
            <CustomName>{item.name}</CustomName>
        </CustomFrame>
    )
}