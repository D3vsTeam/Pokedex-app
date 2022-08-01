import styled from "styled-components/native";
import {pokemonsColors} from "../../theme/index"

type colors = keyof typeof pokemonsColors;

export const CustomFrame = styled.TouchableOpacity<{type: colors}>`
    padding: 20px;
    margin-top: 15px;
    border-radius: 10px;
    border-width: 1px;
    border-color: #0000002c;
    background-color: ${({ theme, type }) => theme.colors[type]};
`

export const CustomId = styled.Text`
    font-size: 18px;
`

export const CustomName = styled.Text`
    font-size: 28px;
`