import React from 'react'
import Navbar from '../Components/Header/Navbar'
// import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom'

import '../Style/Error.css'

function Error (){
    return (
        <div>
            <main>
                <Navbar />
                <h1 className='Error_404'> 404 </h1>
                <p className='message-error'>Oups! La page que vous demandez n'existe pas.</p>
                <Link className='return' to='/'> Retourner à la page d'acceuil </Link>
            </main>
        </div>
    )
}

export default Error