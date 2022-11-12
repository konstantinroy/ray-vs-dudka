import Navbar from "./components/Main/Header/Navbar.jsx";
import MainPhoto from "./components/Main/MainPhoto/MainPhoto.jsx";
import Schedule from "./components/Main/Schedule/Schedule.jsx";
import Results from "./components/Main/Results/Results.jsx";
import Locations from "./components/Main/Locations/Locations.jsx";
import Audio from "./components/Main/Audio/Audio.jsx";
import Photos from "./components/Main/Photos/Photos.jsx";
import Quotes from "./components/Main/Quotes/Quotes.jsx";
import Footer from "./components/Main/Footer/Footer.jsx";


function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPhoto />
      <Schedule />
      <Results />
      <Locations />
      <Audio />
      <Photos />
      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
