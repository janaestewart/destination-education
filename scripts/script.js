import { getName } from "./getName.js";
import { getLanguage } from "./getLanguage.js";
import { getCurrency } from "./getCurrency.js";
import { getCapital } from "./getCapital.js";


// set variables
const submitBtn = document.querySelector("#submit-btn")
const search = document.querySelector("#search") 
const destinationHolder = document.querySelector("#destination")
const searchValue = search.value
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
    console.log(country)
    
    

    const countryCard = country.map((item, index) => {

        let language = ""
            language = (Object.values(country[index].languages).toString().split(",").join(", "))
        console.log(language)
       

        let currency = ""
        let currencies = ""

        for(let i = 0; i < country.length; i++){
            currency = Object.values(country[i].currencies)
            currencies =  Object.values(currency[index]).toString().split(",").join(" ")
        console.log(currency)
        console.log(currencies)

        }
        
        return `<div class="destination-holder item-${index}">
            <img src = ${item.flags.png} alt = ${item.name} class="country-flag">
            <p class="country-name">Country Name: ${item.name.common}<p>
            <p class="country-name">Country Language: ${language}<p>
            <p class="country-currency">Currency Type: ${currencies}<p>
        
        
        
        
        </div>`
    }).join("")
    destinationHolder.innerHTML = countryCard
}

// testApis();



 // <img src = ${item.flag} alt = ${item.name} class="country-flag">