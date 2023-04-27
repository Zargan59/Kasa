import React from 'react'
import '../../Style/Logement.css'


function LogementDescription(props) {
  
    return (
      <div  className='logementTitle'>
          <h1 className='logement-titre'>{props.title}</h1>
          <h2 className='logement-location'>{props.location}</h2>
      </div>
    )
  
    }
  export default LogementDescription