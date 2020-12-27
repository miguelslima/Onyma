import React from "react";
import { Link } from "react-router-dom";

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>O que deseja fazer?</h1>
      <Link to="/list">Lista das clínicas</Link>
      <Link to="/register">Registrar uma clínica</Link>
    </div>
  );
};

export default Dashboard;
