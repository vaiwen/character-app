import { createContext, useState } from "react";
import axios from 'axios';

const CharacterContext = createContext()

export const CharacterContextProvider = ({ children }) => {

    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState('')

    const fetchCharacters = () => {
        axios.get("https://www.breakingbadapi.com/api/characters")
            .then(response => {

                const x = response.data
                const myArray = Object.keys(x).map(key => {
                    return x[key]
                })

                const filteredCharacters = myArray.filter(item => {
                    return item.name.includes(search)
                })

                search ? setCharacters(filteredCharacters) : setCharacters(response.data)
            })
        }

    return (
            <CharacterContext.Provider value={{
                characters,
                setCharacters,
                fetchCharacters,
                search,
                setSearch
            }}>
                {children}
            </CharacterContext.Provider>
        )
    }

    export default CharacterContext