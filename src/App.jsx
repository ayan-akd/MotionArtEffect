import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Review from "./components/Review";
import MagicWand from "./components/MagicWand";
import CardSection from "./components/CardSection";
import Support from "./components/Support";
import Plugin from "./components/Plugin";
const App = () => {
  return (
    <div className="absolute pointer-events-none">
      <NavBar></NavBar>
      <Banner></Banner>
      <Review></Review>
      <MagicWand></MagicWand>
      <CardSection></CardSection>
      <Support></Support>
      <Plugin></Plugin>
      <Footer></Footer>
    </div>
  );
};

export default App;
