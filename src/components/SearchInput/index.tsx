import React from 'react';

import { Container, Input, Search } from './styles';

export const SearchInput: React.FC = () => {
  return (
    <Container>
      <Search name="search" />
      <Input placeholder='What Pokémon are you looking for?' />
    </Container>
  );
}
