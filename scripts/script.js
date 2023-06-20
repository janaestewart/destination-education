import { getName } from "./getName.js";
import { getCode } from "./getCode.js";


// set variables
const submitBtn = document.querySelector("#submit-btn")
const search = document.querySelector("#search") 
const destinationHolder = document.querySelector("#destination")
let countryName = ""

search.addEventListener("change", function(e){
    countryName = e.target.value
    // console.log(countryName)
})

submitBtn.addEventListener("click", function(){
    
    getCountry(countryName)
})


// country[0].name

async function getCountry(countryName){
    const country = await getName(countryName);

    if (!country) {
        console.log('Country data is null or undefined');
        return; // or handle the error appropriately
    }
    
    if (!Array.isArray(country)) {
        console.log('Country data is not an array');
        return; // or handle the error appropriately
    }

    console.log(country)

    
    

    const countryCard = country.map((item, index) => {

        let language = ""
        if (country[index].languages && Object.keys(country[index].languages).length > 0) {
            language = Object.values(country[index].languages).toString().split(",").join(", ");
          }      
    
      
        let currencies = "";
        let currencyInfo = "";

        // for (let i = 0; i < country.length; i++) {
        if (country[index].currencies) {
            const currencyValues = Object.values(country[index].currencies);
            currencyInfo = currencyValues.map(currency => `${currency.name} (${currency.symbol})`);
            currencies = currencyInfo.join(", ");
        } else {
            currencies = "N/A"; // Handle the case when currencies information is not available
        //   }

        console.log("Country", country[i].name.common);
        console.log("Currency Info", currencyInfo);
        console.log("Currencies", currencies);
        console.log("-----");
        }




        return `<div class="destination-holder item-${index}">
            <img src = ${item.flags.png} alt = ${item.name} class="country-flag">
            <p class="country-name">Country Name: ${item.name.common}<p>
            <p class="country-name">Country Language: ${language}<p>
            <p class="country-currency">Currency Type: ${currencies}<p>
            <p class="country-capital">Country Capital: ${item.capital}<p>
            <p class="country-population">Country Population: ${item.population}<p>
            <a href=${item.maps.googleMaps} class="country-link">Map Link</a>
            <p class="country-borders">Country Borders: ${item.borders}<p>
        
        </div>`
    }).join("")
    destinationHolder.innerHTML = countryCard
}