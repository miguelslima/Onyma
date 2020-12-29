import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px;

  width: 85%;
  margin: 30px auto;

  background-color: #f8f8ff;
  padding: 30px;

  display: flex;
  flex-direction: row;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerMap = styled.div`
  margin-left: 20px;
`;

export const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-gap: 10px;

  p {
    background-color: #aaa;
    margin: 5px;
    border-radius: 10px;
    padding: 5px;
    text-align: center;
  }
`;
