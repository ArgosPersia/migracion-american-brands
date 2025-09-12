import CarruselAutomatico from "../components/CarruselAutomatico";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CarruselManual from "../components/CarruselManual";
import CarruselFits from "../components/CarruselFits";

const Home = () => {
  return (
    <div>
      <Header/>
      <CarruselAutomatico />
      <CarruselFits/>
      <CarruselManual/>
      <Footer/>
    </div>
  );
};

export default Home;