import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../store/api/pokemon';
import styles from '../Pages/PokemonPage/PokemonsPage.module.scss';

const OnePokemon = () => {
  const navigate = useNavigate();
  const { name, id } = useParams();
  // eslint-disable-next-line no-undef
  const [moveSet, Setmoveset] = useState<JSX.Element[]>();
  const { data, isLoading, isSuccess } = useGetPokemonByNameQuery(name!);

  return (
    <section className={styles.OnePokemon_section}>
      <div className="container">
        <div className="row center-md">
          {isLoading && <span>Please wait...</span>}
          <div className={`"col-md-6 center-md " ${styles.card}`}>

            <div className={styles.cardInfo}>
              <img height="120" src={data?.sprites.other['official-artwork'].front_default} alt="pokemon" />
              <p>
                Name:
                {' '}
                { name }
              </p>
              <p>
                Height:
                {' '}
                {data?.height}
              </p>
              <p>
                Weight:
                {' '}
                { data?.weight}
              </p>
              <p>
                Stats:
                {' '}
                {/* eslint-disable-next-line camelcase */}
                { data?.stats.map(({ base_stat, stat }) => (
                  <div>
                    <span className={styles.statSpan}>
                      {stat.name}
                      :
                      {' '}
                      {/* eslint-disable-next-line camelcase */}
                      {base_stat}
                    </span>
                  </div>
                )) }
              </p>
            </div>
            <button
              className={styles.btn}
              onClick={() => {
                navigate('/');
              }}
            >
              Back to List
            </button>
            <button
              onClick={() => {
                if (moveSet == null) {
                  Setmoveset(data?.moves.map((move) => (
                    <div className={styles.card}>
                      {move.move.name}
                    </div>
                  )));
                } else {
                  // @ts-ignore
                  Setmoveset(null);
                }
              }}
            >
              MoveSet
            </button>
            <div className={styles.card}>
              {moveSet}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OnePokemon;
