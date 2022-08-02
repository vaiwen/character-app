import React from 'react'

const Search = ({search, setSearch }) => { 
  return (
    <div className='search'>
        <input type="text" placeholder='Write a character name' onChange={(e) => setSearch(e.target.value)} />
        {console.log(search)}
    </div>
  )
}

export default Search