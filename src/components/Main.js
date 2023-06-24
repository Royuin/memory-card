export default function Main ({characters}) {

  function renderCards(){
    const cardItems = characters.map((character) => {
      return (
        <li className='card' key={character.id}>
          <img src={character.link} alt={character.name +  ' from Futurama standing'} />
          <p>{character.name}</p>
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
