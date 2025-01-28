import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[88.7dvh]'>
          <Routes>



          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
