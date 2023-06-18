async function getLanguage(languageName) {
  try {
    const response = await fetch('https://restcountries.com/v3.1/lang/{languageName}');
    const data = await response.json();

    // Extract languages from the response
    const countries = data.map(country => ({
      name: country.name.common,
      nativeName: country.name.native[Object.keys(country.name.native)[0]].common
    }));

    // Access individual country details
    countries.forEach(country => {
      console.log(`Country: ${country.name}`);
      console.log(`Native Name: ${country.nativeName}`);
    });
  } catch (error) {
    console.log('Error:', error);
  }
}
  
  export { getLanguage };