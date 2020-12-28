import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: HEADER;
  background-color: #f8f8ff;
  border-bottom: 1px solid #b7e1ee;
  display: flex;
  height: 80px;
  padding: 0 60px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
export const Title = styled(Link)`
  text-decoration: none;
  color: #023d68;
  font-size: 40px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  width: 500px;
  justify-content: space-around;
`;

export const MenuItemLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #1d4691;
  text-decoration: none;
  margin: 10px 0;
  transition: opacity 0.3s;
  font-size: 18px;

  &:hover {
    opacity: 0.7;
  }
`;
