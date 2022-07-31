import axios from "axios"
import { api } from "./api"

export const getAllPokemons = async () => {
  return await api.get('/pokemon')
}

export const getPokemonByName = async (name: string) => {
  return await api.get(`/pokemon/${name}`)
}

export const get = async (url: string) => {
  return await axios.get(url)
}