import React from "react";
import { Container, Title, MenuContainer, MenuItemLink } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Title to="/">Onyma</Title>

      <MenuContainer>
        <MenuItemLink to="/list">Clínicas</MenuItemLink>

        <MenuItemLink to="/register">Cadastrar Clínica</MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Header;
