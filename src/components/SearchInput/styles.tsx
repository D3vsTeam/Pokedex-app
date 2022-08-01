import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons'; 


export const Container = styled.View`
  align-items: center;
  background-color: #F2F2F2;
;
  display: flex;
  flex-direction: row;
  padding: 20px 25px;
  border-radius: 10px;
  gap: 10px;
`;

export const Search = styled(FontAwesome)`
    color: #747476;
    font-size: 16px;
`;

export const Input = styled.TextInput`
  flex: 1;
  outline: none;

  &:focus-visible {
    outline: none
  }
`;
