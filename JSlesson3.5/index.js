const elTimeline = document.querySelector(".timeline");
const elAsiaBtn = document.querySelector(".js-asia-btn");
const elEuropeBtn = document.querySelector(".js-europe-btn");
const elAfricaBtn = document.querySelector(".js-africa-btn");
const elAmericaBtn = document.querySelector(".js-americas-btn");
const handleRenderCountries = (arr) => {
  elTimeline.innerHTML = '';
    for(let country of arr){
        console.log(country)
       elTimeline.innerHTML += `
       <section class='timeline'>
  <article>
    <div class='timeline__content'>
      <h1>${country.altSpellings[1]}</h1>
      <h2>Population: ${country.population}</h2>
      <hr/>
      <p>Area: ${country.area}</p>
    </div>
		<img src="${country.flags.png}" alt='camera on a map on a desk'/>
  </article>
  
</section>
       `
    }
}

async function getCountry(){
    try{
        let req = await fetch(`https://restcountries.com/v3.1/region/europe`);
        let res = await req.json();
        handleRenderCountries(res);
    }catch(err){
        console.loq(err);
    }
}
getCountry();

elAsiaBtn.addEventListener("click", async() => {
    try{
        let req = await fetch(`https://restcountries.com/v3.1/region/asia`);
        let res = await req.json();
        handleRenderCountries(res);
    }catch(err){
        console.log(err);
    }
});



elAfricaBtn.addEventListener("click", async() => {
  try{
        let req = await fetch(`https://restcountries.com/v3.1/region/africa`);
        let res = await req.json();
        handleRenderCountries(res);
    }catch(err){
        console.log(err);
    }
});

elEuropeBtn.addEventListener("click", async() => {
   try{
        let req = await fetch(`https://restcountries.com/v3.1/region/europe`);
        let res = await req.json();
        handleRenderCountries(res);
    }catch(err){
        console.log(err);
    }
});

elAmericaBtn.addEventListener("click", async() => {
  try{
        let req = await fetch(`https://restcountries.com/v3.1/region/americas`);
        let res = await req.json();
        handleRenderCountries(res);
    }catch(err){
        console.log(err);
    }
});
