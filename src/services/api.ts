import db from "../database/firestore";

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

export default async function getCliniList() {
  try {
    const data = await db.collection("clinicas").get();

    return data.docs.map((doc) => doc.data());
  } catch (error) {
    return false;
  }
}

export const registerClinic = async (formData: RegisterClinicData) => {
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

  // console.log(formData)

  try {
    console.log("chegou no try");

    const response = await db
      .collection("clinics")
      .add({
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
      })
      .then(() => {
        console.log("ok");
      })
      .catch((err) => {
        console.log(err);
      });

    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};
