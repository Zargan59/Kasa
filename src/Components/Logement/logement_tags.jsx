import React from "react";
import '../../Style/Logement.css'


function logementTags(props){
    return(
        <ul className="logement-tag">
            {props.tags.map((tag)=>{
                return(
                    <li>{tag}</li>
                )
            })}
        </ul>
    )
}

export default logementTags