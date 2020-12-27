import React from "react";
import { Link } from "react-router-dom";

import { Container, ChooseContainer, Title } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Title>O que deseja fazer?</Title>

      <ChooseContainer>
        <Link to="/list">
          <p>Listar clínicas</p>
        </Link>
        <Link to="/register">
          <p>Registrar uma clínica</p>
        </Link>
      </ChooseContainer>
    </Container>
  );
};

export default Dashboard;
