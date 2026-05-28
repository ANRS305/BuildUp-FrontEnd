import Header from "../Componentes/Header/Header";
import Cadastrar from "../Componentes/Cadastrar/Cadastro";
import Footer from "../Componentes/Footer/Footer";
import "../Componentes/Usuarios/usuarios.css";

function Home() {
  return (
    <>
      <Header />
      <Cadastrar />
      <Footer />
    </>
  );
}

export default Home;