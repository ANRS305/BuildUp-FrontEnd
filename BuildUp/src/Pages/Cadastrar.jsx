import Header from "../Components/Header/Header";
import Cadastrar from "./Cadastrar/Cadastro";
import Footer from "../Components/Footer/Footer";
import "../Components/Usuarios/usuarios.css";

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
