import React from 'react'

const Character = ({ character }) => {

  // const myStyle = {
  //   backgroundImage: character.img,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center"
  // }

  // style={{backgroundImage:  `url(${character.img})`}}

  return (
    <div className='character'>
      <img src={character.img}></img>
      <div className='character-info'>
        <h1>{character.name}</h1>
        <hr/>
        <p><strong>Nickname: </strong>{character.nickname}</p>
        <p><strong>Portrayed: </strong>{character.portrayed}</p>
        <p><strong>Status: </strong>{character.status}</p>
      </div>


    </div>
  )
}

export default Character


  // < ul >
  // {(() => {
  //   for (let i = 0; i < character.occupation - 1; i++) (
  //     <li>{character.occupation[i]}</li>
  //   )
  // })()}
  //       </ul >