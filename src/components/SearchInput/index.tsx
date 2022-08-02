import React from 'react';

import { Container, Input, Search } from './styles';

export type SearchInputType = {
  handleChange: (input: string) => void;
}

export const SearchInput: React.FC<SearchInputType> = ({ handleChange }) => {
  return (
    <Container>
      <Search name="search" />
      <Input placeholder='What Pokémon are you looking for?' onChangeText={handleChange} />
    </Container>
  );
}
