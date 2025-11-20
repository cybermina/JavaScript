let elPokemonsList = document.querySelector(".pokemons-list")
function handleRenderPokemons(arr){
    arr.forEach((pokemon) => {
        console.log(pokemon.img)
        elPokemonsList.innerHTML += `<li class="pokemon">
        <div class="card" onclick="pokemonClicked(1)">
           <img src="${pokemon.img}" alt=""> 
          <h2>${pokemon.num}</h2>
          <h3>${pokemon.name}</h3>
        </div>
        
    </li>`
    }) 
} 
handleRenderPokemons(pokemons)
