import styled from "styled-components/native";



export const CustomText = styled.Text`

    font-size: ${({size }) => size || 24}px
    color: ${({color}) => color || ''}

`