import styled from "styled-components";

export const Container = styled.div`
  height: 75%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChooseContainer = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;

  a {
    text-decoration: none;
    transition: 0.3s;
  }

  a:hover {
    opacity: 0.6;
  }

  p {
    font-size: 30px;
    padding-top: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
`;
