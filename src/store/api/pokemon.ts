// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Pokemon = {
  moves:[{
    move:{
      name:string,
      url:string
    }
  }]
  stats:[{

    'base_stat':number,
    stat:{
      name:string
  }
  }]

  sprites:{

    'front_default':string
    other:{
      'official-artwork':{

        'front_default':string
      }
    }
  }

  name: string
  url: string
  id:number,
  weight: number,
  height: number,
}

type AllPokemonsResponse = {
  count: number
  next: string
  previous: null | string
  results: Pokemon[]
}

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query<AllPokemonsResponse, void>({
      query: () => 'pokemon',
    }),
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetAllPokemonsQuery } = pokemonApi;

export default pokemonApi;
