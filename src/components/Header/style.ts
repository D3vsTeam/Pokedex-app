import styled from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 


export const PokemonText = styled.Text`
    width: 85;
    height: 40;
    font-size: 16px;
    font-weight: 500;
`;
export const Detalhe = styled.Text`
    width: 55%;
    height: 50;
    font-size: 10px;
    text-align: center;
`;
export const InputPokemon = styled.Text`

`;

export const Icon = styled(MaterialCommunityIcons)`
    margin-top: 50;
`;

export const Search = styled(FontAwesome)`
    height: 50px;
    width: 300px;
    border-width: 1px;
    border-color: black;
    border-radius: 5px;
`;