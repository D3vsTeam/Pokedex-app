import styled from "styled-components/native";
import { TypeNames } from "../../model/Pokemon";


export const CustomCardType = styled.View<{type: TypeNames}>`
border-width: 1px
border-radius: 5px
align-items: center
padding: 5px
background-color: ${({ theme, type }) => theme.colors[type]};
margin-right: 10px
`