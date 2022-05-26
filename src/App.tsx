import React from 'react';
import './assets/flexboxgrid.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import PokemonsPage from './Pages/PokemonPage/PokemonsPage';
import OnePokemon from './Components/OnePokemon';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<PokemonsPage />} />
      <Route path="/:name" element={<OnePokemon />} />
    </Routes>
  </Router>

);

export default App;
