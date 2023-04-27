import React, {useState} from 'react'
import arrow from '../assets/arrow.png'
import './Carroussel.css'

function Carroussel(props) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const imageArray = props.pictures.flatMap(e => e.pictures).length

    function NextImage(){
        let newImage = currentSlide ===  imageArray -1 ? 0 : currentSlide +1;
        setCurrentSlide(newImage)
    }
    function PreviousImage(){
        let newImage = currentSlide === 0 ? imageArray -1 : currentSlide -1;
        setCurrentSlide(newImage)
    }
  
    return (
      <section className='Carroussel_section' >
          <div className='Carroussel_nav'>
            <img src={arrow} alt="Left_arrow" className='left-arrow' onClick={() => PreviousImage()}/>
            <img src={arrow} alt="Right_arrow" className='right-arrow' onClick={() => NextImage()}/>
          </div>
          {props.pictures.map((picture, index)=>{
            return(
              
                <img src={picture} alt="Logement" key={index} className={index ===currentSlide ? "Carroussel_img" : "hide_img"} />
            )
          })}
          <div className='Carroussel_text'>{currentSlide +1}/{props.pictures.length} </div>
      </section>
    )
  
    }
  export default Carroussel