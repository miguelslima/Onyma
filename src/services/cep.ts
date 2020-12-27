import axios from "axios";

// import { removeNonDigits } from '../utils/removeNonDigits'

export const getAddressByPostalCode = async (postalCode: any) => {
  // const formattedPostalCode = removeNonDigits(postalCode)

  try {
    const { data } = await axios.get(
      `https://viacep.com.br/ws/${postalCode}/json`
    );
    return data;
  } catch (error) {
    return false;
  }
};
