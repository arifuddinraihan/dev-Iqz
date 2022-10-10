import './App.css';
import Footer from './Components/Footer/Footer';
import HeroSection from './Components/HomePage.js/HeroSection';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
