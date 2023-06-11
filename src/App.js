import React from 'react';
import { ContactUs } from './components/EmailForm/Emailjs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import About from './components/About/About';
import SimpleMap from './components/Map/Map';
import {Route, Routes} from 'react-router-dom';
import "./style.css"
import Eng from './components/Eng/Eng';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='pages'>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/map' element={<SimpleMap/>}/>
        <Route path='*' element={<Main/>}/>
        <Route path='/Engagement' element={<Eng/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
