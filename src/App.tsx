import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Footer from './components/footer/Footer'

import Home from './pages/home/Home'
import SobreNos from './components/sobrenos/SobreNos'
import Navbar from './components/Navbar/Navbar'




function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[88.7dvh]'>
          <Routes>
            <Route path="/" element={<Home/>} />     
            <Route path="/sobrenos" element={<SobreNos />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
