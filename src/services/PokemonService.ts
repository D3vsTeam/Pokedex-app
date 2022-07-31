import axios from "axios"
import { api } from "./api"

export const getAllPokemons = async () => {
  return await (await api.get('/pokemon')).data
}

export const getPokemonByName = async (name: string) => {
  return await api.get(`/pokemon/${name}`)
}

export const get = async (url: string) => {
  return await axios.get(url)
}

export const useGetData = () => {
  const getPokemons = async () => {
      const response = await api.get('pokemon/ditto')
      return response.data
  }

  return {
    getPokemons
  }
}