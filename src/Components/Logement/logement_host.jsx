import React from 'react'
import '../../Style/Logement.css'


function LogementInfo(props) {
  
    return (
      <div  className='host'>
          <p className='hostName'>{props.host.name}</p>
          <img src={props.host.picture} alt="Présentation de l'hote" className='hostImg' />
      </div>
    )
  
    }
  export default LogementInfo