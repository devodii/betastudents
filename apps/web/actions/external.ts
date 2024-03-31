"use server";

export const getCountries = async () => {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags"
    );
    const countries = await response.json();

    return countries;
  } catch (error) {
    console.error({ error });
  }
};
