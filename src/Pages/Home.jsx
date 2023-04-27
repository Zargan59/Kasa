import React from 'react'
import Navbar from '../Components/Header/Navbar'
import Banner from '../Components/Header/Banner'
import Card from '../Components/Card'
import Footer from '../Components/Footer/Footer'
import '../Style/home.css'

function Home (){
    return (
        <div>
            <Navbar />
            <main>
                <Banner origin ='home' />
                <Card />
            </main>
            <Footer />

        </div>
    )
}
export default Home