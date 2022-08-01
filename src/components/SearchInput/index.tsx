import React from 'react';

import { Container, Input, Search } from './styles';

const SearchInput: React.FC = () => {
  return (
    <Container>
      <Search name="search" />
      <Input placeholder='What Pokémon are you looking for?' />
    </Container>
  );
}

export default SearchInput;