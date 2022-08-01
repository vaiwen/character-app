import './App.css';
import CharacterContext from './context/CharacterContext'
import React, { useContext, useEffect } from 'react'
import CharacterList from './components/CharacterList';
import Search from './components/Search';

function App() {
  const { fetchCharacters } = useContext(CharacterContext)
  const { setSearch } = useContext(CharacterContext)

  useEffect(() => {
    fetchCharacters()
  }, [setSearch])

  return (
    <div className="App">
      <Search setSearch={setSearch} />
      <CharacterList />
    </div>
  )
}

export default App;
