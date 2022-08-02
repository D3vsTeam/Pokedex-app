import React from "react";
import { View, Text, TextInput } from "react-native";
import {SearchInput} from "../../components";
import { PokemonText, Detalhe, Icon, Container } from './style';

type HeaderType = {
  handleSearch: (input: string) => void;
}

export const Header: React.FC<HeaderType> = ({ handleSearch }) => {
  return (
    <Container>
      <Icon name="text-long" size={24} color="black" />
      <PokemonText>Pokedex</PokemonText>
      <Detalhe>Procure pelo seu pokemon pelo nome ou ID</Detalhe>
      <SearchInput handleChange={handleSearch}/>
    </Container>
  )
}