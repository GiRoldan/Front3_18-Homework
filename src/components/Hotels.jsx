import React from 'react'
import hoteles from '../hoteles.json'

const Hotels = () => {
  return (
    <div>
       <h1>Hoteles:</h1>
        <ul>
          {hoteles.map(item => (
            // <li key={item.id}>{item.name}</li>
            <li><h1>{item.name}</h1></li>
          ))}
        </ul>
    </div>
  )
}

export default Hotels
