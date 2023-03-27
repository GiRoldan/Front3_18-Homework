import React from 'react'
import { Outlet, useParams } from 'react-router-dom';
import hoteles from '../hoteles.json'

const Details = () => {
    const { id } = useParams();
  const hotel = hoteles.find(h => h.id === id);
  
  return (
    <div>
        <h2>DETAILS PAGE</h2>
      <h2>Detalles del hotel</h2>
      <h3>{hotel.name}</h3>
      <img src={hotel.img} alt="" height='300' width='400'/>
      <h3>{hotel.stars} Estrellas</h3>
      <h4>Precio: {hotel.daily_price}</h4>
      <p>Ubicado en la ciudad de {hotel.city}</p>
      <p>{hotel.description}</p>
      <p>Contáctanos:</p>
      <h3>{hotel.phone}</h3>
      <h3>{hotel.email}</h3>
      <Outlet/>
    </div>   
  );
}

export default Details
