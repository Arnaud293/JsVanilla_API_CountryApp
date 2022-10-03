// coutry.name.includes(inputSearch.value);
const container = document.querySelector('.countries-container');
let countries = [];

rangeValue.value = inputRange.value;
console.log(inputRange.value)

const fetchCountries = async () => {
    await fetch(`https://restcountries.com/v3.1/all/`)
    .then((res) => res.json())
    .then((data) => (countries = data));

    console.log(countries)
    CountriesDisplay();
}

fetchCountries();



const CountriesDisplay = () => {

    

    for (let i = 0; i < countries.length; i++){


        container.innerHTML = countries.filter((country) => country.translations.fra.common.toLowerCase().includes(inputSearch.value.toLowerCase()))
        .slice(0, inputRange.value)
        .map((country) => {
            return  ` 
                
                    <div class='country-card'>
                        <h2>${country.name.common}</h2>
                        <img src='${country.flags.png}'/>
                        <p>${country.capital}</p>
                        <p>${country.population} habitants</p>
                    </div>
                    `
        }).join('');
    }
}

window.addEventListener('load', fetchCountries);

inputSearch.addEventListener('input', (e) => {
    e.preventDefault();
    fetchCountries(e.target.value).then(() => CountriesDisplay());
} )

inputRange.addEventListener('input', (e) => {

    CountriesDisplay();
    inputRange.value = e.target.value;
    rangeValue.textContent = inputRange.value;
    countries.length = inputRange.value;
})