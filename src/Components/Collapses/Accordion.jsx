import React, {useState} from 'react'
import './Collapse.css'
import Chevron from '../assets/Vector.png'

export default function Accordion(props){
  const [toggle, setToggle] = useState(true)

  function CollapseContent(){
    const content = props.description
    if(typeof content ==='string'){
      return(<p className='collapse_texte'>{content} </p>)
    }else{
      return(
        <ul className='collapse_texte'>
          {content.map((item,index) =>(
            <li className='collapse_li'key={index} >{item} </li>
          ))}
        </ul>
      ) }}

    const toggleState = () => {setToggle(!toggle)}

    return (
      <div className="accordion">  
        <div className='accordion-content'>
          <div onClick={toggleState} className="accordion-visible">
            <h2>{props.title}</h2>
            <img className={toggle && "active"} src={Chevron} alt='Chevron' />
          </div>
            
          <div className= {`accordion-toggle${toggle ? '_hidden ':''}`} >
            {CollapseContent()}
          </div> 
        </div>
      </div>
    )
  

  }

  



