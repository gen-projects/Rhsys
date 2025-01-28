import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'

function App() {


  return (
    <>
      <BrowserRouter>
        <div className='min-h-[88.7dvh]'>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
