import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Produto from "./pages/produto/Produto";
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import SobreNos from './pages/sobrenos/SobreNos
import Navbar from './components/Navbar/Navbar'





function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[88.7dvh]'>
          <Routes>
            <Route path="/" element={<Home/>} />     
            <Route path="/home" element={<Home/>} />     
            <Route path="/sobrenos" element={<SobreNos />} />
            <Route path="/produtos" element={<Produto />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
