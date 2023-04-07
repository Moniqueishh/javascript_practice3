const getPokemonData = async poke => {        
    const url = `https://pokeapi.co/api/v2/pokemon/${poke}`
    const response = await fetch(url)
    const pokemon = await response.json()

    document.getElementById('get_img').setAttribute('src', pokemon.sprites.front_default)
    document.getElementById('get_name').innerHTML = pokemon.name
}

const search_poke = document.getElementById('search_q')
const search_btn = document.getElementById('search-btn')
search_btn.addEventListener('click', () => getPokemonData(search_poke.value))
