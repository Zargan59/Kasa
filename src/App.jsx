import React from 'react';
import './main.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom';

//Importation des différentes pages
import Home from './Pages/Home';
import Logement from './Pages/Logement'
import Apropos from './Pages/Apropos'
import Error from './Pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Kasa' element={<Home />} />
        <Route path='Kasa/logement/:id' element={<Logement />}/>
        <Route path='/apropos'element={<Apropos />} />
        <Route path='*'element={<Error />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
