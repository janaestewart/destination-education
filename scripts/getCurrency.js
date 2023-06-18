async function getCurrency(currencyName) {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/currency/${currencyName}`
      );
      const json = await res.json();
      return json;
    } catch (err) {
      console.log(err);
    }
  }
  
  export { getCurrency };