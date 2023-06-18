async function getCapital(capitalName) {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/capital/${capitalName}`
      );
      const json = await res.json();
      return json;
    } catch (err) {
      console.log(err);
    }
  }
  
  export { getCapital };