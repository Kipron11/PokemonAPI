import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './PokemonsPage.module.scss';
import { useGetAllPokemonsQuery } from '../../store/api/pokemon';

import OnePokemon from '../../Components/OnePokemon';

const PokemonsPage = () => {
  const { data, isLoading, isSuccess } = useGetAllPokemonsQuery();
  const navigate = useNavigate();

  return (
    <div className={styles.pokemonCards}>

      {data && data.results.map(({ name, url }) => {
        const arr = url.split('/');
        const id = arr[arr.length - 2];
        const apiUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        console.log(id);
        return (
          <section className="row container-fluid ">
            <div
              key={Math.random()}
              className={`"col-md-12 center-md"  ${styles.card}`}
            >
              <img
                height="120"
                src={apiUrl}
                alt="pokemon"
              />
              <button
                className={styles.btn}
                onClick={() => {
                  navigate(`/${name}`);
                }}
              >
                {name}
              </button>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default PokemonsPage;
