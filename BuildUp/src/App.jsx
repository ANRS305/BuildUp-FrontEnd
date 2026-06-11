import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Cadastrar from "./Pages/Cadastrar/Cadastrar";
import Login from "./Pages/Login/Login";
import Simulador from "./Pages/Simulador/Simulador";
import Profissionais from "./Pages/Profissionais/Profissionais";
import ChatIA from "./Pages/ChatIA/ChatIA"
import Contratar from "./Pages/Contratar/Contratar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Obra" element={<Simulador />} />
        <Route path="/Profissionais" element={<Profissionais />} />
        <Route path="/ChatIA" element={<ChatIA />} />
        <Route path="/Contratar" element={<Contratar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
