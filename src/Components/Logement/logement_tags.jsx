import React from "react";
import '../../Style/Logement.css'


function logementTags(props){
    return(
        <ul className="logement-tag">
            {props.tags.map((tag, index)=>{
                return(
                    <li key={index}>{tag}</li>
                )
            })}
        </ul>
    )
}

export default logementTags