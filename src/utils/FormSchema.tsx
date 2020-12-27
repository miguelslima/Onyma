import * as Yup from "yup";

const fieldLabels = {
  requiredField: "Campo obrigatório",
  validEmail: "Insira um e-mail válido",
  validPhone: "Insira um número válido",
};

export const FormSchema = () =>
  Yup.object().shape({
    name: Yup.string().required(fieldLabels.requiredField),
    email: Yup.string()
      .email(fieldLabels.validEmail)
      .required(fieldLabels.requiredField),
    phone: Yup.string().required(fieldLabels.requiredField),
    postalCode: Yup.string().required(fieldLabels.requiredField),
    addressNumber: Yup.string().required(fieldLabels.requiredField),
  });
