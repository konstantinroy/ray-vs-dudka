import Header from "./components/Header/Header";
import MainPhoto from "./components/MainPhoto/MainPhoto.jsx";
import Schedule from "./components/Schedule/Schedule.jsx";
import Results from "./components/Results/Results.jsx";
import Locations from "./components/Locations/Locations.jsx";


function App() {
  return (
    <div className="App">
      <Header />
      <MainPhoto />
      <Schedule />
      <Results />
      <Locations />
    </div>
  );
}

export default App;
