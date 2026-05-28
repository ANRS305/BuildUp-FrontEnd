import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Cadastrar from "./Pages/Cadastrar";

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

      </Routes>

    </BrowserRouter>
  );
}

export default App;