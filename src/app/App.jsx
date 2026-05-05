import { useState } from 'react'
import Header from '../pokemon/components/Header'
import PokeList from '../pokemon/components/PokeList'

function App() {
  const [ search, setSearch ] = useState('')
  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <PokeList search={search} />
    </>
  )
}

export default App
