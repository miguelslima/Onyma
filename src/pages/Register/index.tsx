import React, { useState } from "react";

import {
  Container,
  Form,
  Input,
  Label,
  Button,
  InfoContainer,
  ErrorMessage,
  AddressContainer,
  ServicesContainer,
} from "./styles";

import { useToast } from "../../hooks/toast";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { FormSchema } from "../../utils/FormSchema";
import { getAddressByPostalCode } from "../../services/cep";
import { phoneFormatter } from "../../utils/phoneFormatter";
import { postalCodeFormatter } from "../../utils/postalCodeFormatter";
import { registerClinic } from "../../services/api";

interface RegisterClinicData {
  name: string;
  address: string;
  addressNumber: string;
  addressComplement: string;
  email: string;
  postalCode: string;
  phone: string;
  services: {
    clinical: Boolean;
    complementary: Boolean;
    ppra: Boolean;
    pcmso: Boolean;
  };
}

const Register: React.FC = () => {
  const [messageError, setMessageError] = useState("");
  const history = useHistory();
  const { addToast } = useToast();

  const handleFormSubmit = async (formData: RegisterClinicData) => {
    const response = await registerClinic(formData);

    if (response) {
      history.push("/");
      // addToast({
      //   type: "success",
      //   title: "Cadastro realizado!",
      //   description: "Você já pode fazer seu logon no GoBarber!",
      // });
    } else {
      console.log("error " + response);
    }
  };

  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    setFieldValue,
    touched,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      postalCode: "",
      address: "",
      addressNumber: "",
      addressComplement: "",
      services: {
        clinical: false,
        complementary: false,
        ppra: false,
        pcmso: false,
      },
    },
    onSubmit: (formData) => {
      handleFormSubmit(formData);
    },
    validationSchema: FormSchema,
  });

  const handleAddressNumber = (value: string) => value.replace(/\D/g, "");

  const handlePostalCode = async (postalCode: any) => {
    if (postalCode.length === 9) {
      const response = await getAddressByPostalCode(postalCode);

      if (response.erro) {
        return setMessageError("CEP inválido");
      }

      return setFieldValue("address", response.logradouro);
    }

    return null;
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <p>* Campos obrigatórios</p>

        <Label htmlFor="name">
          Nome da Clínica<span>*</span>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Ex: Clínica Albert Einstein"
            value={values.name}
            onChange={handleChange("name")}
            onBlur={() => handleBlur("name")}
          />
          {errors.name && touched.name && (
            <ErrorMessage>{errors.name}</ErrorMessage>
          )}
        </Label>

        <InfoContainer>
          <Label htmlFor="phone">
            WhatsApp<span>*</span>
            <Input
              type="text"
              name="phone"
              placeholder="(11) 99999-9999"
              id="phone"
              value={phoneFormatter(values.phone)}
              onChange={handleChange("phone")}
              onBlur={() => handleBlur("phone")}
            />
            {errors.phone && touched.phone && (
              <ErrorMessage>{errors.phone}</ErrorMessage>
            )}
          </Label>

          <Label htmlFor="email">
            E-mail <span>*</span>
            <Input
              type="email"
              name="email"
              placeholder="exemplo@email.com"
              id="email"
              value={values.email}
              onChange={handleChange("email")}
              onBlur={() => handleBlur("email")}
            />
            {errors.email && touched.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
          </Label>
        </InfoContainer>

        <AddressContainer>
          <Label htmlFor="postalCode">
            Cep <span>*</span>
            <Input
              type="text"
              name="postalCode"
              id="postalCode"
              placeholder="00000-000"
              value={postalCodeFormatter(values.postalCode)}
              onChange={(e) => {
                handlePostalCode(e.target.value);
                setFieldValue("postalCode", e.target.value);
              }}
              onBlur={() => handleBlur("postalCode")}
            />
            {errors.postalCode && touched.postalCode && (
              <ErrorMessage>{errors.postalCode}</ErrorMessage>
            )}
            {messageError && <ErrorMessage>{messageError}</ErrorMessage>}
          </Label>

          <Label htmlFor="addressNumber">
            Número <span>*</span>
            <Input
              type="text"
              name="addressNumber"
              id="addressNumber"
              value={handleAddressNumber(values.addressNumber)}
              onChange={handleChange("addressNumber")}
              onBlur={() => handleBlur("addressNumber")}
            />
            {errors.addressNumber && touched.addressNumber && (
              <ErrorMessage>{errors.addressNumber}</ErrorMessage>
            )}
          </Label>

          <Label htmlFor="addressComplement">
            Complemento
            <Input
              type="text"
              name="addressComplement"
              id="addressComplement"
              placeholder="Ex: Casa, Condomínio, Bloco"
              value={values.addressComplement}
              onChange={handleChange("addressComplement")}
            />
            {errors.addressComplement && touched.addressComplement && (
              <ErrorMessage>{errors.addressComplement}</ErrorMessage>
            )}
          </Label>
        </AddressContainer>

        <Label htmlFor="address">
          Endereço
          <Input
            disabled
            type="text"
            name="address"
            id="address"
            value={values.address || ""}
          />
        </Label>

        <h4> Selecione os serviços disponíveis na clínica: </h4>
        <ServicesContainer>
          <Label htmlFor="services.clinical">
            <input
              type="checkbox"
              name="services.clinical"
              id="services.clinical"
              onChange={handleChange("services.clinical")}
              checked={values.services.clinical}
            />
            Exames Clínicos
          </Label>

          <Label>
            <input
              type="checkbox"
              name="services.complementary"
              id="services.complementary"
              onChange={handleChange("services.complementary")}
              checked={values.services.complementary}
            />
            Exames Complementares
          </Label>

          <Label htmlFor="services.ppra">
            <input
              type="checkbox"
              name="services.ppra"
              id="services.ppra"
              onChange={handleChange("services.ppra")}
              checked={values.services.ppra}
            />
            PPRA
          </Label>

          <Label htmlFor="services.pcmso">
            <input
              type="checkbox"
              name="services.pcmso"
              id="services.pcmso"
              onChange={handleChange("services.pcmso")}
              checked={values.services.pcmso}
            />
            PCMSO
          </Label>
        </ServicesContainer>

        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Register;
