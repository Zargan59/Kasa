import React from 'react'
// import ListLogements from '../JSON/logements.json';
import {NavLink} from "react-router-dom";
import './Card.css'

function Card() {
  const annonces = require("../JSON/logements.json")

  return (
  
    <section className='cards'>
      {annonces.map((element)=>(
      <NavLink to = {"logement/"+element.id} key={element.id} className='links' >
        <div className='card'>
          <img 
          src={element.cover} 
          alt = {element.description} className='card_img'></img>
          <p className='card_text'>{element.title}</p>
        </div>
      </NavLink>
      ))}
    </section>
  )
}

export default Card