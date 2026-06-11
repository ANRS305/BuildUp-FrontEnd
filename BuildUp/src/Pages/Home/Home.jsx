import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Cards from "../../Components/Cards/Cards";
import Banner from "./Banner/Banner";
import "./home.css";

function Home() {

  return (
    <>
      <Header />
      <Banner />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;