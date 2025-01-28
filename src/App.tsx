import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SobreNos from './components/sobrenos/SobreNos'
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[88.7dvh]'>
          <Routes>
            <Route path="/sobrenos" element={<SobreNos />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
