import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Produto from "./pages/produto/Produto";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-[88.7dvh]">
          <Routes>
            <Route path="/produto" element={<Produto />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
