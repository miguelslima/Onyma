import db from "../database/firestore";

export default async function getCliniList() {
  try {
    const data = await db.collection("clinicas").get();

    return data.docs.map((doc) => doc.data());
  } catch (error) {
    return false;
  }
}

export const registerClinic = async (formData: any) => {
  const {
    name,
    address,
    addressNumber,
    addressComplement,
    email,
    postalCode,
    phone,
    services,
  } = formData;

  try {
    const response = await db.collection("clinicas").add({
      nome: `${name}`,
      email: `${email}`,
      endereco: `${address}, ${addressNumber} ${addressComplement}`,
      cep: `${postalCode}`,
      whatsapp: `${phone}`,
      servicos: [
        {
          "Exames Clínicos": services.clinical,
          "Exames Complementares": services.complementary,
          PPRA: services.ppra,
          PCMSO: services.pcmso,
        },
      ],
    });

    return response;
  } catch (error) {
    return false;
  }
};
