document.addEventListener("DOMContentLoaded", () => {
  const elTimeline = document.querySelector(".timeline");
  const elAsiaBtn = document.querySelector(".js-asia-btn");
  const elEuropeBtn = document.querySelector(".js-europe-btn");
  const elAfricaBtn = document.querySelector(".js-africa-btn");
  const elAmericaBtn = document.querySelector(".js-americas-btn");
  const elSearch = document.querySelector(".js-search");
  const elThemeBtn = document.querySelector(".js-theme-btn");

  let allCountries = [];

  
  const renderCountries = (arr) => {
    elTimeline.innerHTML = "";
    arr.forEach(country => {
      elTimeline.innerHTML += `
        <article>
          <div class="timeline__content">
            <h1>${country.name.common}</h1>
            <h2>Population: ${country.population.toLocaleString()}</h2>
            <hr/>
            <h3>Capital: ${country.capital}</h3>
            <h3>Region: ${country.region}</h3>
          </div>
          <img src="${country.flags.png}" alt="flag">
        </article>
      `;
    });
  };

 
  const getCountriesByRegion = async (region) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
      const data = await res.json();
      allCountries = data;
      renderCountries(allCountries);
    } catch(err) {
      console.log(err);
    }
  };

  
  getCountriesByRegion("europe");

  elAsiaBtn.addEventListener("click", () => getCountriesByRegion("asia"));
  elEuropeBtn.addEventListener("click", () => getCountriesByRegion("europe"));
  elAfricaBtn.addEventListener("click", () => getCountriesByRegion("africa"));
  elAmericaBtn.addEventListener("click", () => getCountriesByRegion("americas"));

  
  elSearch.addEventListener("input", () => {
    const query = elSearch.value.toLowerCase().trim();
    const filtered = allCountries.filter(country => {
      return country.name.common.toLowerCase().includes(query) ||
             country.name.official.toLowerCase().includes(query);
    });
    renderCountries(filtered);
  });

  
  if(localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.add("dark");
  }

  elThemeBtn.addEventListener("click", () => {
    if(document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("theme","light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("theme","dark");
    }
  });
});
