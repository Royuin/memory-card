export default function Main ({characters, shuffle, checkIfInMemory}) {

  function renderCards(){
    const cardItems = characters.map((character) => {
      const id =character.id;
      return (
        <li onClick={() => {
          shuffle();
          checkIfInMemory(id);
        }}
          className='card' key={character.id} >
          <img  src={character.link} alt={character.name +  ' from Futurama standing'}  />
          <p >{character.name}</p>
        </li>
      );
    });

    return <ul>{cardItems}</ul>
  }

  return (
    <main>
      {renderCards()}
    </main>
  )

}
