import styled from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const PokemonText = styled.Text`
    width: 85;
    height: 50;
    margin-top: 100px;
    margin-left: 70px;
    font-size: 16px;
    font-weight: 500;
`;
export const Detalhe = styled.Text`
    width: 55%;
    height: 50;
    margin-left: 63px;
    font-size: 10px;
    text-align: center;
`;
export const InputPokemon = styled.Text`
    width: 60%;
    height: 30;
    margin-left: 70;
    margin-right: 30;
    background-color: #cfcfc6;
    border: 1px solid #cfcfc6;
    border-radius: 5px;
`;

export const Icon = styled(MaterialCommunityIcons);
