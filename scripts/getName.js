async function getName(countryName) {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const json = await res.json();
      return json;
    } catch (err) {
      console.log(err);
    }
  }
  
  export { getName };