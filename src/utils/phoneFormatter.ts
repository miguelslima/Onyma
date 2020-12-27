export const phoneFormatter = (phone: any) =>
  phone
    .replace(/\D/g, "")
    .replace(/^0/, "")
    .replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
