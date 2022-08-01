import React, { useContext } from 'react'
import CharacterContext from '../context/CharacterContext'
import Character from './Character'

const CharacterList = () => {
    const { characters } = useContext(CharacterContext)
  return (
    <div className='character-list'>
         {
          characters.map((character, index) => (
            <Character character={character} key={index} />)
          )
         }
    </div>
  )
}

export default CharacterList