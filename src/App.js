import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
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
  const [memory, setMemory] = useState([]);

  function addToMemory (id) {
    setMemory(previousState => [...previousState, id]);
  }

  function shuffle() {
    const shuffledArray = []; 
    const copyArray =  characters;
    for (let i = characters.length; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i));
      const item =  (copyArray.splice(newIndex, 1));
      Array.prototype.push.apply(shuffledArray, item);
    }
    setCharacters(shuffledArray);
  }

  return (
    <div className="App">
      <Header score={score} highScore={highScore} />
      <Main characters={characters} shuffle={shuffle} addToMemory={addToMemory} />
    </div>
  );
}
