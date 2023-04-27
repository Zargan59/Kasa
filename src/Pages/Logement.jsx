import React from 'react'
import Navbar from '../Components/Header/Navbar'
import Carroussel from '../Components/Carroussel/Carroussel'

import LogementDescription from '../Components/Logement/logement_title'
import LogementTags from '../Components/Logement/logement_tags'
import LogementInfo from '../Components/Logement/logement_host'
import LogementRating from '../Components/Logement/logement_rating'
import Accordion from '../Components/Collapses/Accordion'

import Footer from '../Components/Footer/Footer'
import Error from './Error'
import '../Style/Logement.css'
import { useParams } from 'react-router-dom'

import logement from '../JSON/logements.json'


function Logement (){
    const { id } = useParams()
    const data = logement.find((item)=>item.id ===id)
    if(!data){
        return( <Error />)
    }

    return (
        <section >
            <Navbar />
            <main key={data.id}>
            <Carroussel pictures ={data.pictures}/>
        
            <div className='logement-info'>
                <div>
                    <LogementDescription  title= {data.title} location = {data.location} />
                    <LogementTags tags = {data.tags} />
                </div>
                <div className='host-info'>
                    <LogementInfo host={data.host}  />      
                    <LogementRating rating={data.rating} maxScore='5' />
                </div>
            </div>

            
            <div className='logement-content'>
                <div className='collapse_logement'>
                    <Accordion title ='Description' description={data.description} />
                </div>
                <div className='collapse_logement'>
                    <Accordion title ='Équipements' description={data.equipments} />

                </div>
            </div>
            
            </main>
            <Footer />
        </section>
    )
}
export default Logement
