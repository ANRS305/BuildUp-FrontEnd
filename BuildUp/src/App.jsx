import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Cadastrar from "./Pages/Cadastrar";
import Login from "./Pages/Login";
import Simulador from "./Pages/Obra";
import Profissionais from "./Pages/Profissionais";

function App() {
  return (

    <BrowserRouter>
      <Routes>
          <Route
              path="/"
              element={<Home />}
          />
          <Route
              path="/cadastrar"
              element={<Cadastrar />}
          />
          <Route
              path="/login"
              element={<Login />}
          />
          <Route
              path="/Obra"
              element={<Simulador />}
          />
          <Route
              path="/Profissionais"
              element={<Profissionais />}
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;