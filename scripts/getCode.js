async function getCode(countryName) {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
  }
}

export { getCode };