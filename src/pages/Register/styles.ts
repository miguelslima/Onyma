import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  margin: 0px auto;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  background-color: #f8f8ff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > p {
    color: red;
    font-size: 10px;
    text-align: right;
    padding: 0 10px 0 0;
  }
  > h4 {
    font-size: 14px;
    font-weight: 700;
    margin: 10px;
    color: #76787a;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  margin: 10px;
  color: #76787a;

  span {
    color: red;
  }
`;

export const Input = styled.input.attrs({
  placeholderTextColor: "#f44",
})`
  width: 100%;

  padding: 10px;
  margin-top: 5px;

  border: 1px solid #ddd;

  &:focus {
    background-color: #aaa;
  }
`;

export const Button = styled.button`
  align-self: center;
  margin: 20px;
  width: 300px;
  height: 35px;
  background-color: #1d4691;
  color: #fff;
  border-radius: 3px;

  &:hover {
    opacity: 0.8;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: red;
  margin-top: 5px;
`;

export const InfoContainer = styled.div`
  padding: 0 10px 10px 10px;
`;

export const AddressContainer = styled.div`
  padding: 0 10px;
`;

export const ServicesContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #d3d3d3;

  input {
    margin-right: 5px;
  }
`;
