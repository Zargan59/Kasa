import React from 'react'
import Navbar from '../Components/Header/Navbar'
import Banner from '../Components/Header/Banner'
import Footer from '../Components/Footer/Footer'
import Accordion from '../Components/Collapses/Accordion'
import CollapseInfo from '../Components/Collapses/Collapse.json'
import '../Style/About.css'


function Apropos (){
    return (
        <div className='about'>
            <Navbar />
            <main>
                <Banner origin ='apropos' />

                <section className='info'>
                    {CollapseInfo.map((text, index)=>(
                        <Accordion title={text.title} key={index} description={text.description} />

                    ))}
                </section>
            </main>
            <Footer/>
        </div>

    )
}

export default Apropos
