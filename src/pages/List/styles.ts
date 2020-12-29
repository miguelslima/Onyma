import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
`;

export const SearchHeader = styled.div`
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  background-color: #f8f8ff;
  display: flex;
  align-items: center;
`;

export const SearchHeaderContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  padding: 0 24px;
  width: 100%;
  margin: 0 auto;
`;

export const SearchWrap = styled.div`
  position: relative;
  display: flex;
  width: 337px;
  height: 56px;
  padding: 8px 16px;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #dfdfdf;

  input {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
    width: 90%;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  width: 152px;
  height: 46px;
  background-color: #fff;
  border: 1px solid #dfdfdf;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  cursor: pointer;

  outline: thin dotted;
  outline: 0px auto -webkit-focus-ring-color;
  outline-offset: 0px;
`;
