import React from 'react'
import star from'../assets/Star.png'
import redStar from'../assets/redStar.png'
import '../../Style/Logement.css'


function Rating(props){
    const {rating, maxScore} = props
    const stars =[]
    for(let i= 1; i<= maxScore; i++){
        if(i<=rating){
            stars.push(<img key={i}  className='redStarImg'  src={redStar} alt='stars' />)
        }else{
            stars.push(<img key={i} className='greyStarImg' src={star} alt='stars' />)

        }
    }

    return(
        <div className='starRating'>
            {stars}
        </div>
    )

}

export default Rating