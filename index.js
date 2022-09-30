// coutry.name.includes(inputSearch.value);
const container = document.querySelector('.countries-container');
let countries = [];

const fetchCountries = async () => {
    await fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => (countries = data));

    console.log(countries)
    CountriesDisplay();
}

fetchCountries();

const CountriesDisplay = () => {

    for(let i = 0; i < countries.length; i++){

        container.innerHTML = countries.map((country) => {
            return  ` 
                
                    <div class='country-card'>
                        <h2>${country.name.common}</h2>
                        <img src='${country.flags.png}'/>
                    </div>
                    `
        }).join('');
    }
}

