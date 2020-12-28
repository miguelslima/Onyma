import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #fff;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  > p {
    color: red;
    font-size: 10px;
    text-align: right;
  }
  > h4 {
    font-size: 14px;
    font-weight: 700;
    margin: 10px;
    color: #76787a;
  }
`
export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  margin: 10px;
  color: #76787a;
  span {
    color: red;
  }
`

export const Input = styled.input`
  width: 100%;

  padding: 10px;
  margin-top: 5px;
  &:focus {
    background-color: #f8f8ff;
  }
`

export const Button = styled.button`
  align-self: center;
  margin: 20px;
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
  &:hover {
    opacity: 0.8;
  }
`

export const ErrorMessage = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: red;
  margin-top: 5px;
`
export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const AddressContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const ServicesContainer = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #d3d3d3;
  input {
    margin-left: 5px;
  }
`