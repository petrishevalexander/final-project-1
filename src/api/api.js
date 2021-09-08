import axios from "axios";

export const getPokemons = () => {
    return axios.get(`http://localhost:8000/pokemons`)
}

