import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Funcionarios from "./pages/funcionarios/Funcionarios";
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Navbar from './components/Navbar/Navbar'
import Sobre from "./pages/sobre/Sobre";





function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[84.7dvh]'>
          <Routes>
            <Route path="/" element={<Home/>} />     
            <Route path="/home" element={<Home/>} />     
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/funcionarios" element={<Funcionarios />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
