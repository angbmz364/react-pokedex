import '../../styles/PokeCard.css'

export default function PokeCard( {poke, id, types} ) {


  return (
    <div className='pokeCard'>
      <h2>{poke.charAt(0).toUpperCase()+poke.split('').slice(1).join('')}</h2>
      <h3>#{String(id).padStart(3, '0')} </h3>
    </div>
  )
}