import React from 'react'
import './banner.css'

function Banner(props) {
  if (props.origin ==='home'){

  return (
    <div className=' banner banner_Home'>
        <h1 className='banner_text'>Chez vous, partout et ailleurs</h1>
    </div>
  )
}
else {
  return (
    <div className='banner banner_Apropos'></div>
  )
}
}

export default Banner