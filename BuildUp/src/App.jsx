import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Cadastrar from "./Pages/Cadastrar";
import Login from "./Pages/Login";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;