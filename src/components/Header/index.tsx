import React from "react";
import { View, Text, TextInput } from "react-native";
import {SearchInput} from "../../components";
import { PokemonText, Detalhe, Icon, Container } from './style';

export const Header = () => {
  return (
    <Container>
      <Icon name="text-long" size={24} color="black" />
      <PokemonText>Pokedex</PokemonText>
      <Detalhe>Procure pelo seu pokemon pelo nome ou ID</Detalhe>
      <SearchInput />
    </Container>
  )
}