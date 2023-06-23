import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import bender from './assets/bender.webp';
import fry from './assets/fry.webp';
import leela from './assets/leela.webp';
import amy from './assets/amy.webp';
import hermes from './assets/hermes.webp';
import zoidberg from './assets/zoidberg.webp';
import farnsworth from './assets/farnsworth.webp';
import scruffy from './assets/scruffy.webp';
import uniqid from 'uniqid'; 

export default function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [characters, setCharacters] = useState([
    {link: bender,
      name: 'Bender',
    id: uniqid()},
    {link: fry,
      name: 'Fry',
    id: uniqid()},
    {link: leela,
      name: 'Leela',
    id: uniqid()},
    {link: amy,
      name: 'Amy',
    id: uniqid()},
    {link: hermes,
      name: 'Hermes',
    id: uniqid()},
    {link: zoidberg,
      name: 'Zoidberg',
    id: uniqid()},
    {link: farnsworth,
      name: 'Farnsworth',
    id: uniqid()},
    {link: scruffy,
      name: 'Scruffy',
    id: uniqid()}
    ]);

  return (
    <div className="App">
      <Header score={score} highScore={highScore} />
    </div>
  );
}
