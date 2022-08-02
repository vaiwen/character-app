import './App.css';
import CharacterContext from './context/CharacterContext'
import React, { useContext, useEffect } from 'react'
import CharacterList from './components/CharacterList';
import Search from './components/Search';

function App() {
  const {search, setSearch } = useContext(CharacterContext)
  const { fetchCharacters } = useContext(CharacterContext)

  useEffect(() => {
    fetchCharacters()
  }, [search])

  return (
    <div className="App">
      <Search setSearch={setSearch} search={search} />
      <CharacterList />
    </div>
  )
}

export default App;
