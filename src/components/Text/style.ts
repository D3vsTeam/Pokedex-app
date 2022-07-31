import styled from "styled-components/native";

export const CustomText = styled.Text<{size: number, color: string}>`
    font-size: ${props => props.size || 24}px;
    color: ${({ color }) => color || '#333'};
`;